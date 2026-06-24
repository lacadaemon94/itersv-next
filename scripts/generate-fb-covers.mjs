import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "public", "social");
const width = 1640;
const height = 720;

const markPath =
  "M48 24C48 37.2548 37.2548 48 24 48C19.6468 48 15.5643 46.841 12.0442 44.8147L24.7101 18.7569C25.0975 17.9598 24.5171 17.0323 23.6309 17.0323H10.8142C10.3555 17.0323 9.93692 17.2938 9.73577 17.7061L1.98948 33.5827C0.709764 30.6475 0 27.4066 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM35.5023 30.9677C39.3505 30.9677 42.47 27.8482 42.47 24C42.47 20.1518 39.3505 17.0323 35.5023 17.0323C31.6541 17.0323 28.5346 20.1518 28.5346 24C28.5346 27.8482 31.6541 30.9677 35.5023 30.9677Z";

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function meshDefs() {
  return `
    <defs>
      <radialGradient id="g-purple" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#8A3DFF"/>
        <stop offset="0.48" stop-color="#691EEB"/>
        <stop offset="1" stop-color="#691EEB" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-cyan" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#7DFFE6"/>
        <stop offset="0.52" stop-color="#1FFFC7"/>
        <stop offset="1" stop-color="#1FFFC7" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-teal" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#23E6C8"/>
        <stop offset="0.56" stop-color="#1FA9C9"/>
        <stop offset="1" stop-color="#1FA9C9" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-blue" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#2E7CFF"/>
        <stop offset="0.58" stop-color="#2456D8"/>
        <stop offset="1" stop-color="#2456D8" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-magenta" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#C24DFF"/>
        <stop offset="0.5" stop-color="#8A3DFF"/>
        <stop offset="1" stop-color="#8A3DFF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="base-wash" x1="0" y1="0" x2="${width}" y2="${height}">
        <stop offset="0" stop-color="#0A0B10"/>
        <stop offset="0.34" stop-color="#16034E"/>
        <stop offset="0.68" stop-color="#072D45"/>
        <stop offset="1" stop-color="#081113"/>
      </linearGradient>
      <filter id="blur-field" x="-20%" y="-40%" width="140%" height="180%">
        <feGaussianBlur stdDeviation="76"/>
      </filter>
      <filter id="grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.92" numOctaves="3" seed="17"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.7  0 0 0 0 0.72  0 0 0 0 0.76  0 0 0 0.31 0"/>
      </filter>
      <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.18"/>
      </filter>
      <pattern id="dot-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.2" fill="#F7FFF8" opacity="0.13"/>
      </pattern>
    </defs>
  `;
}

function background() {
  return `
    <rect width="${width}" height="${height}" fill="url(#base-wash)"/>
    <g filter="url(#blur-field)" opacity="0.96">
      <circle cx="176" cy="84" r="356" fill="url(#g-magenta)"/>
      <circle cx="360" cy="610" r="450" fill="url(#g-purple)"/>
      <circle cx="760" cy="310" r="380" fill="url(#g-cyan)"/>
      <circle cx="1202" cy="152" r="430" fill="url(#g-blue)"/>
      <circle cx="1438" cy="626" r="410" fill="url(#g-teal)"/>
      <circle cx="1020" cy="708" r="280" fill="#571FFF" opacity="0.62"/>
    </g>
    <rect width="${width}" height="${height}" fill="url(#dot-grid)" opacity="0.38"/>
    <rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.48" style="mix-blend-mode: overlay"/>
    <rect width="${width}" height="${height}" fill="rgba(10,11,16,0.14)"/>
  `;
}

function watermark({ x = 1364, y = 612, opacity = 0.48 } = {}) {
  return `
    <g transform="translate(${x} ${y})" opacity="${opacity}" filter="url(#soft-shadow)">
      <mask id="iter-watermark-mask-${Math.round(x)}-${Math.round(y)}">
        <rect x="-12" y="-12" width="210" height="78" fill="#000000"/>
        <g transform="translate(0 0) scale(0.92)">
          <path d="${markPath}" fill="#ffffff"/>
        </g>
        <text x="58" y="33"
          font-family="Ubuntu, 'Source Sans 3', Inter, Arial, sans-serif"
          font-size="30"
          font-weight="800"
          letter-spacing="0"
          fill="#ffffff">Iter</text>
      </mask>
      <rect x="-12" y="-12" width="210" height="78" fill="#F7FFF8" mask="url(#iter-watermark-mask-${Math.round(x)}-${Math.round(y)})"/>
    </g>
  `;
}

function titleBlock() {
  const lineA = "Unete a la";
  const lineB = "Revolución IA";
  return `
    <g transform="translate(520 198)" filter="url(#soft-shadow)">
      <text x="0" y="0"
        font-family="Ubuntu, 'Source Sans 3', Inter, Arial, sans-serif"
        font-size="118"
        font-weight="900"
        letter-spacing="0"
        fill="#F7FFF8">${escapeXml(lineA)}</text>
      <text x="0" y="132"
        font-family="Ubuntu, 'Source Sans 3', Inter, Arial, sans-serif"
        font-size="118"
        font-weight="900"
        letter-spacing="0"
        fill="#F7FFF8">${escapeXml(lineB)}</text>
    </g>
  `;
}

function coverSvg({ title = false } = {}) {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      ${meshDefs()}
      ${background()}
      ${
        title
          ? `
            ${titleBlock()}
            ${watermark()}
          `
          : `
            ${watermark()}
          `
      }
    </svg>
  `;
}

async function writeCover(name, options) {
  const outputPath = path.join(outDir, name);
  const buffer = await sharp(Buffer.from(coverSvg(options)))
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
  await writeFile(outputPath, buffer);
  const metadata = await sharp(buffer).metadata();
  if (metadata.width !== width || metadata.height !== height) {
    throw new Error(`${name} expected ${width}x${height}, got ${metadata.width}x${metadata.height}`);
  }
  return { outputPath, bytes: buffer.length };
}

await mkdir(outDir, { recursive: true });

const generated = [
  await writeCover("iter-fb-cover-title.png", { title: true }),
  await writeCover("iter-fb-cover-minimal.png", { title: false }),
];

for (const asset of generated) {
  console.log(`${path.relative(rootDir, asset.outputPath)} (${width}x${height}, ${asset.bytes} bytes)`);
}
