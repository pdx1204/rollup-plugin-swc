/**
 * @type {import('rollup').RollupOptions}
 */

import swc from "@qiuqfang/rollup-plugin-swc";

export default {
  input: "./src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],

  plugins: [swc()],
};
