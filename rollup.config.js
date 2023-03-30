/**
 * @type {import('rollup').RollupOptions}
 */

import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import del from "rollup-plugin-delete";

export default {
  external: ["@swc/core"],
  input: "./src/index.ts",
  output: [
    { file: "dist/index.cjs", format: "cjs" },
    { file: "dist/index.mjs", format: "es" },
  ],
  plugins: [
    resolve({ extensions: [".ts"] }),
    babel({ babelHelpers: "bundled", extensions: [".ts"] }),
    commonjs(),
    json(),
    del({ targets: "dist/*" }),
  ],
};
