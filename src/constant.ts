import { RollupPluginSwcOption } from "./index";

export const DEFAULT_OPTIONS: RollupPluginSwcOption = {
  jsc: {
    parser: {
      syntax: "typescript",
    },
    target: "esnext",
  },
  module: { type: "es6" },
};
