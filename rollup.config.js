/**
 * @type {import('rollup').RollupOptions}
 */

import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";

export default {
  external: ["@swc/core"],
  input: "./src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],

  plugins: [typescript(), commonjs(), json(), del({ targets: "dist/*" })],
};
