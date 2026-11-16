// Medan bersama untuk peta kontur SVG (fallback) dan terrain Three.js.
// Koordinat x,y dalam rentang [-1, 1]. Nilai tinggi kira-kira 0..1.
export const HILLS = [
  [-0.45, -0.20, 0.95, 0.30],
  [0.35, 0.25, 0.80, 0.26],
  [0.62, -0.48, 0.55, 0.20],
  [-0.15, 0.55, 0.50, 0.22],
  [0.05, -0.05, 0.35, 0.16],
  [-0.75, 0.45, 0.40, 0.18],
  [0.80, 0.70, 0.30, 0.15],
];

export function height(x, y) {
  let h = 0;
  for (const [cx, cy, a, s] of HILLS) {
    const dx = x - cx;
    const dy = y - cy;
    h += a * Math.exp(-(dx * dx + dy * dy) / (2 * s * s));
  }
  // riak halus agar garis kontur tidak terlalu geometris
  h += 0.035 * Math.sin(5.1 * x + 1.3) * Math.cos(4.3 * y - 0.7);
  return h;
}

export const CONTOUR_STEP = 0.075; // jarak antar kontur
