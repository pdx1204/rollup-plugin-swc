/**
 * @type {import('rollup').RollupOptions}
 */

import nodeResolve from "@rollup/plugin-node-resolve";
import swc from "../dist/index.mjs";

export default {
  input: "./src/index.ts",
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],
  plugins: [swc(), nodeResolve({ extensions: [".ts", ".js", ".json"] })],
};
