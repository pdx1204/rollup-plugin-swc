import { RollupPluginSwcOption } from "./index";

export const DEFAULT_OPTIONS: RollupPluginSwcOption = {
  jsc: {
    loose: false, // 通常不推荐启用
    parser: {
      syntax: "typescript",
    },
    target: "esnext", // 编译成哪个版本
  },
  module: { type: "es6" }, // 编译后代码的模块化方案
};
