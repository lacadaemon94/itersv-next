import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: ["support.js", "*.dc.html", "uploads/**", ".old/**", ".mockup/**"],
  },
  ...nextVitals,
];

export default config;
