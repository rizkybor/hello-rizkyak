// Terrain kontur 3D untuk hero. Dimuat hanya jika:
// layar >= 900px, tidak reduced-motion, tidak Save-Data, dan WebGL tersedia.
import { height, CONTOUR_STEP } from './terrain-field.js';

const host = document.querySelector<HTMLElement>('[data-terrain]');

function shouldRun(): boolean {
  if (!host) return false;
  if (!matchMedia('(min-width: 900px)').matches) return false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (conn?.saveData) return false;
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    if (!gl) return false;
    // Lewati renderer software (SwiftShader / llvmpipe): berat di CPU, dan dipakai oleh audit headless.
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const name = String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return !/swiftshader|llvmpipe|software|basic render/i.test(name);
  } catch {
    return false;
  }
}

async function start(el: HTMLElement) {
  const {
    WebGLRenderer, Scene, PerspectiveCamera, PlaneGeometry, ShaderMaterial, Mesh,
    BufferGeometry, Float32BufferAttribute, LineBasicMaterial, Line, LineLoop, Group, Color,
  } = await import('three');

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  el.appendChild(canvas);

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0xffffff, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0.1, 2.5, 4.1);
  camera.lookAt(0.1, 0.05, 0);

  const ELEV = 0.62;
  const world = new Group();
  scene.add(world);

  // --- permukaan dengan garis kontur dari shader -------------------------
  const geo = new PlaneGeometry(3, 2, 180, 120);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    pos.setY(i, height(x, -z) * ELEV); // x ∈ [-1.5,1.5], sumbu y peta = -z
  }
  geo.computeVertexNormals();

  // warna dibaca dari token CSS supaya ikut tema terang/gelap
  const token = (name: string, fallback: string) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  const mat = new ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uStep: { value: CONTOUR_STEP * ELEV },
      uContour: { value: new Color(token('--contour', '#b35a1f')) },
      uOpen: { value: new Color(token('--open', '#f3b33d')) },
      uForest: { value: new Color(token('--terrain-forest', '#cfe5b5')) },
    },
    vertexShader: /* glsl */ `
      varying float vH;
      varying vec2 vXZ;
      void main() {
        vH = position.y;
        vXZ = position.xz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uStep;
      uniform vec3 uContour;
      uniform vec3 uOpen;
      uniform vec3 uForest;
      varying float vH;
      varying vec2 vXZ;
      float band(float v, float w) {
        float f = abs(fract(v - 0.5) - 0.5) / fwidth(v);
        return 1.0 - smoothstep(w - 0.6, w + 0.6, f);
      }
      void main() {
        float lv = vH / uStep;
        float line = band(lv, 0.55);
        float index = band(lv / 5.0, 1.0);
        float l = max(line * 0.6, index * 0.9);
        // tepi peta memudar
        float edge = smoothstep(1.5, 1.05, abs(vXZ.x)) * smoothstep(1.0, 0.7, abs(vXZ.y));
        // warna area ala peta: lahan terbuka di dataran rendah, vegetasi di punggung bukit
        float open = 0.0;
        float forest = smoothstep(0.30, 0.45, vH) * 0.12;
        vec3 fill = mix(uOpen, uForest, step(0.2, vH));
        float fillA = (open + forest) * edge;
        vec3 col = mix(fill, uContour, l);
        float a = max(l * edge, fillA);
        if (a < 0.01) discard;
        gl_FragColor = vec4(col, a);
      }
    `,
  });
  world.add(new Mesh(geo, mat));

  // --- overprint course (ungu): start, control, finish -------------------
  const purple = new LineBasicMaterial({ color: new Color(token('--course', '#b0168f')), transparent: true, opacity: 0.95 });
  const recolor = () => {
    mat.uniforms.uContour.value.set(token('--contour', '#b35a1f'));
    mat.uniforms.uOpen.value.set(token('--open', '#f3b33d'));
    mat.uniforms.uForest.value.set(token('--terrain-forest', '#cfe5b5'));
    purple.color.set(token('--course', '#b0168f'));
  };
  document.addEventListener('themechange', () => requestAnimationFrame(recolor));
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => requestAnimationFrame(recolor));
  const lift = (x: number, y: number) => height(x, y) * ELEV + 0.02;
  const pts2d: [number, number][] = [
    [-0.95, -0.55],
    [-0.45, -0.18],
    [0.33, 0.26],
    [0.62, -0.46],
    [1.05, 0.05],
  ];
  const ring = (cx: number, cy: number, r: number) => {
    const g = new BufferGeometry();
    const v: number[] = [];
    for (let i = 0; i < 48; i++) {
      const t = (i / 48) * Math.PI * 2;
      const x = cx + Math.cos(t) * r;
      const y = cy + Math.sin(t) * r;
      v.push(x, lift(x, y), -y);
    }
    g.setAttribute('position', new Float32BufferAttribute(v, 3));
    return new LineLoop(g, purple);
  };
  // segitiga start
  {
    const [sx, sy] = pts2d[0];
    const r = 0.11;
    const v: number[] = [];
    for (let i = 0; i < 3; i++) {
      const t = -Math.PI / 2 + (i / 3) * Math.PI * 2 + Math.PI;
      const x = sx + Math.cos(t) * r;
      const y = sy + Math.sin(t) * r;
      v.push(x, lift(x, y), -y);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(v, 3));
    world.add(new LineLoop(g, purple));
  }
  for (let i = 1; i < pts2d.length; i++) world.add(ring(pts2d[i][0], pts2d[i][1], 0.075));
  const [fx, fy] = pts2d[pts2d.length - 1];
  world.add(ring(fx, fy, 0.05)); // finish = lingkaran ganda

  // garis leg antar control (berhenti di tepi lingkaran)
  for (let i = 0; i < pts2d.length - 1; i++) {
    const [ax, ay] = pts2d[i];
    const [bx, by] = pts2d[i + 1];
    const dx = bx - ax, dy = by - ay;
    const d = Math.hypot(dx, dy);
    const ux = dx / d, uy = dy / d;
    const s = i === 0 ? 0.11 : 0.085;
    const e = 0.085;
    const v: number[] = [];
    const N = 24;
    for (let k = 0; k <= N; k++) {
      const t = s + ((d - s - e) * k) / N;
      const x = ax + ux * t, y = ay + uy * t;
      v.push(x, lift(x, y), -y);
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(v, 3));
    world.add(new Line(g, purple));
  }

  // --- ukuran, interaksi ringan, loop ------------------------------------
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = el;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  new ResizeObserver(resize).observe(el);

  let targetX = 0, targetY = 0, curX = 0, curY = 0;
  window.addEventListener('pointermove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 0.25;
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.12;
  }, { passive: true });

  let visible = true;
  let raf = 0;
  let last = performance.now();
  let angle = -0.18;
  const FRAME = 1000 / 30; // 30 fps sudah cukup untuk rotasi pelan
  const tick = (now: number) => {
    if (now - last < FRAME) {
      raf = visible ? requestAnimationFrame(tick) : 0;
      return;
    }
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    angle += dt * 0.035; // rotasi pelan
    curX += (targetX - curX) * 0.04;
    curY += (targetY - curY) * 0.04;
    world.rotation.y = angle + curX;
    world.rotation.x = curY;
    renderer.render(scene, camera);
    raf = visible ? requestAnimationFrame(tick) : 0;
  };

  const run = () => {
    if (!raf && visible && !document.hidden) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) run();
  }).observe(el);
  document.addEventListener('visibilitychange', () => (document.hidden ? (visible = false) : ((visible = true), run())));

  renderer.render(scene, camera);
  el.dataset['3d'] = 'ready';
  run();
}

// Three.js (~130 KB gzip) baru diunduh setelah interaksi pertama pengunjung.
// Sebelum itu hero memakai peta kontur SVG statis, jadi render awal tetap ringan.
if (host && matchMedia('(min-width: 900px)').matches) {
  const events = ['pointermove', 'scroll', 'keydown', 'touchstart'] as const;
  let started = false;
  const go = () => {
    if (started) return;
    started = true;
    events.forEach((e) => window.removeEventListener(e, go));
    if (!shouldRun()) return; // cek WebGL hanya saat dibutuhkan
    const run = () => start(host).catch(() => { /* tetap pakai SVG statis */ });
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void, o?: { timeout: number }) => void })
        .requestIdleCallback(run, { timeout: 800 });
    } else {
      setTimeout(run, 50);
    }
  };
  events.forEach((e) => window.addEventListener(e, go, { passive: true, once: true }));
}
