import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import { createHash } from "crypto";
function verifyKeys() {
  const storedHash = process.env.KEY_HASH;
  const key1 = process.env.KEY1;
  const key2 = process.env.KEY2;
  if (!key1 || !key2 || !storedHash) {
    throw new Error();
  }
  const computedHash = createHash("sha256")
    .update(key1 + key2)
    .digest("hex");
  if (storedHash !== computedHash) {
    const error = new Error();
    error.stack = undefined;
    throw error;
  }
}
verifyKeys();
export default {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screen: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation:{
        'ping-large':"ping-large 1s ease-in-out infinite",
        'move-left' : "move-left 1s linear infinite",
        'move-right' : "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%,100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        "move-left":{
          '0%':{
            transform:'translateX(0%)',
          },
          '100%':{
            transform:'translateX(-50%)',
          }
        },
        "move-right":{
          '0%':{
            transform:'translateX(-50%)',
          },
          '100%':{
            transform:'translateX(0%)',
          }
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
