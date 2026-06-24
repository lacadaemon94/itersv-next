import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "public", "social");

const markPath =
  "M48 24C48 37.2548 37.2548 48 24 48C19.6468 48 15.5643 46.841 12.0442 44.8147L24.7101 18.7569C25.0975 17.9598 24.5171 17.0323 23.6309 17.0323H10.8142C10.3555 17.0323 9.93692 17.2938 9.73577 17.7061L1.98948 33.5827C0.709764 30.6475 0 27.4066 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM35.5023 30.9677C39.3505 30.9677 42.47 27.8482 42.47 24C42.47 20.1518 39.3505 17.0323 35.5023 17.0323C31.6541 17.0323 28.5346 20.1518 28.5346 24C28.5346 27.8482 31.6541 30.9677 35.5023 30.9677Z";

const platforms = [
  { id: "facebook", size: 640 },
  { id: "instagram", size: 2160 },
  { id: "linkedin", size: 800 },
  { id: "x", size: 800 },
];

const variants = [
  {
    id: "solid-white",
    background: "#F7FFF8",
    mark: "#0A0B10",
    mesh: false,
  },
  {
    id: "solid-black",
    background: "#0A0B10",
    mark: "#F7FFF8",
    mesh: false,
  },
  {
    id: "mesh",
    background: "#0A0B10",
    mark: "#F7FFF8",
    mesh: true,
  },
];

function meshDefs(size) {
  return `
    <defs>
      <radialGradient id="g-purple" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#8A3DFF"/>
        <stop offset="0.5" stop-color="#691EEB"/>
        <stop offset="1" stop-color="#691EEB" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-cyan" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#7DFFE6"/>
        <stop offset="0.5" stop-color="#1FFFC7"/>
        <stop offset="1" stop-color="#1FFFC7" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-teal" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#23E6C8"/>
        <stop offset="0.6" stop-color="#1FA9C9"/>
        <stop offset="1" stop-color="#1FA9C9" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-blue" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#2E7CFF"/>
        <stop offset="0.6" stop-color="#2456D8"/>
        <stop offset="1" stop-color="#2456D8" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="g-magenta" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="#C24DFF"/>
        <stop offset="0.5" stop-color="#8A3DFF"/>
        <stop offset="1" stop-color="#8A3DFF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="base-wash" x1="0" y1="0" x2="${size}" y2="${size}">
        <stop offset="0" stop-color="#0A0B10"/>
        <stop offset="0.36" stop-color="#16034E"/>
        <stop offset="0.7" stop-color="#072D45"/>
        <stop offset="1" stop-color="#081113"/>
      </linearGradient>
      <filter id="blur-field" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="${Math.round(size * 0.095)}"/>
      </filter>
      <filter id="grain" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="23"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.72  0 0 0 0 0.74  0 0 0 0 0.78  0 0 0 0.29 0"/>
      </filter>
      <filter id="mark-shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="${Math.round(size * 0.024)}" stdDeviation="${Math.round(size * 0.036)}" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>
  `;
}

function meshMarkFill(size) {
  return `
    <g filter="url(#blur-field)" opacity="0.98">
      <circle cx="${size * 0.12}" cy="${size * 0.1}" r="${size * 0.48}" fill="url(#g-magenta)"/>
      <circle cx="${size * 0.24}" cy="${size * 0.88}" r="${size * 0.58}" fill="url(#g-purple)"/>
      <circle cx="${size * 0.55}" cy="${size * 0.42}" r="${size * 0.48}" fill="url(#g-cyan)"/>
      <circle cx="${size * 0.88}" cy="${size * 0.18}" r="${size * 0.5}" fill="url(#g-blue)"/>
      <circle cx="${size * 0.9}" cy="${size * 0.86}" r="${size * 0.46}" fill="url(#g-teal)"/>
    </g>
    <rect width="${size}" height="${size}" filter="url(#grain)" opacity="0.5" style="mix-blend-mode: overlay"/>
  `;
}

function profileSvg(size, variant) {
  const markSize = size * 0.58;
  const scale = markSize / 48;
  const offset = (size - markSize) / 2;
  const maskId = `iter-mark-mask-${size}`;

  if (variant.mesh) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
        ${meshDefs(size)}
        <rect width="${size}" height="${size}" fill="${variant.background}"/>
        <mask id="${maskId}">
          <rect width="${size}" height="${size}" fill="#000000"/>
          <g transform="translate(${offset} ${offset}) scale(${scale})">
            <path d="${markPath}" fill="#ffffff"/>
          </g>
        </mask>
        <g mask="url(#${maskId})" filter="url(#mark-shadow)">
          ${meshMarkFill(size)}
        </g>
      </svg>
    `;
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="${variant.background}"/>
      <g transform="translate(${offset} ${offset}) scale(${scale})">
        <path d="${markPath}" fill="${variant.mark}"/>
      </g>
    </svg>
  `;
}

async function writeProfile(platform, variant) {
  const name = `iter-profile-${platform.id}-${variant.id}-${platform.size}.png`;
  const outputPath = path.join(outDir, name);
  const buffer = await sharp(Buffer.from(profileSvg(platform.size, variant)))
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();

  await writeFile(outputPath, buffer);

  const metadata = await sharp(buffer).metadata();
  if (metadata.width !== platform.size || metadata.height !== platform.size) {
    throw new Error(
      `${name} expected ${platform.size}x${platform.size}, got ${metadata.width}x${metadata.height}`,
    );
  }

  return { outputPath, size: platform.size, bytes: buffer.length };
}

await mkdir(outDir, { recursive: true });

const generated = [];

for (const platform of platforms) {
  for (const variant of variants) {
    generated.push(await writeProfile(platform, variant));
  }
}

for (const asset of generated) {
  console.log(
    `${path.relative(rootDir, asset.outputPath)} (${asset.size}x${asset.size}, ${asset.bytes} bytes)`,
  );
}
