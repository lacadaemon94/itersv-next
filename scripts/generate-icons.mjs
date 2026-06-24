import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const appDir = path.join(rootDir, "src", "app");

const markPath =
  "M48 24C48 37.2548 37.2548 48 24 48C19.6468 48 15.5643 46.841 12.0442 44.8147L24.7101 18.7569C25.0975 17.9598 24.5171 17.0323 23.6309 17.0323H10.8142C10.3555 17.0323 9.93692 17.2938 9.73577 17.7061L1.98948 33.5827C0.709764 30.6475 0 27.4066 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM35.5023 30.9677C39.3505 30.9677 42.47 27.8482 42.47 24C42.47 20.1518 39.3505 17.0323 35.5023 17.0323C31.6541 17.0323 28.5346 20.1518 28.5346 24C28.5346 27.8482 31.6541 30.9677 35.5023 30.9677Z";

const baseSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="104" fill="#0A0B10"/>
  <rect width="512" height="512" rx="104" fill="url(#paint0_radial)" fill-opacity="0.82"/>
  <g transform="translate(76 76) scale(7.5)">
    <path d="${markPath}" fill="#F7FFF8"/>
  </g>
  <defs>
    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(378 112) rotate(127.4) scale(458 434)">
      <stop stop-color="#1FFFC7"/>
      <stop offset="0.48" stop-color="#571FFF"/>
      <stop offset="1" stop-color="#0A0B10"/>
    </radialGradient>
  </defs>
</svg>`;

const maskableSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#0A0B10"/>
  <rect width="512" height="512" fill="url(#paint0_linear)" fill-opacity="0.9"/>
  <g transform="translate(112 112) scale(6)">
    <path d="${markPath}" fill="#F7FFF8"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#571FFF"/>
      <stop offset="0.58" stop-color="#1FA9C9"/>
      <stop offset="1" stop-color="#1FFFC7"/>
    </linearGradient>
  </defs>
</svg>`;

const safariSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="${markPath}" fill="#000000"/></svg>`;

async function pngFromSvg(svg, size) {
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
}

function createIco(images) {
  const headerSize = 6;
  const directorySize = 16 * images.length;
  let offset = headerSize + directorySize;
  const header = Buffer.alloc(headerSize);

  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  const directories = images.map(({ size, buffer }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buffer.length;
    return entry;
  });

  return Buffer.concat([header, ...directories, ...images.map(({ buffer }) => buffer)]);
}

async function writePng(relativePath, size, svg = baseSvg) {
  const filePath = path.join(rootDir, relativePath);
  const buffer = await pngFromSvg(svg, size);
  await writeFile(filePath, buffer);
  return { relativePath, size };
}

await mkdir(publicDir, { recursive: true });
await mkdir(appDir, { recursive: true });

const icoImages = await Promise.all(
  [16, 32, 48].map(async (size) => ({ size, buffer: await pngFromSvg(baseSvg, size) })),
);
const icoBuffer = createIco(icoImages);

await writeFile(path.join(publicDir, "favicon.ico"), icoBuffer);
await writeFile(path.join(appDir, "favicon.ico"), icoBuffer);
await writeFile(path.join(publicDir, "safari-pinned-tab.svg"), safariSvg);

const generated = [
  await writePng("public/favicon-16x16.png", 16),
  await writePng("public/favicon-32x32.png", 32),
  await writePng("public/apple-touch-icon.png", 180),
  await writePng("public/android-chrome-192x192.png", 192),
  await writePng("public/android-chrome-512x512.png", 512),
  await writePng("public/maskable_icon_x192.png", 192, maskableSvg),
  await writePng("public/maskable_icon_x512.png", 512, maskableSvg),
  await writePng("public/mstile-150x150.png", 150),
  await writePng("src/app/icon.png", 512),
  await writePng("src/app/apple-icon.png", 180),
];

for (const asset of generated) {
  const metadata = await sharp(path.join(rootDir, asset.relativePath)).metadata();
  if (metadata.width !== asset.size || metadata.height !== asset.size) {
    throw new Error(
      `${asset.relativePath} expected ${asset.size}x${asset.size}, got ${metadata.width}x${metadata.height}`,
    );
  }
}

console.log(`Generated ${generated.length + 3} Iter icon assets.`);
