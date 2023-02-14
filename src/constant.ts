import { RollupPluginSwcOption } from "./index";

export const DEFAULT_OPTIONS: RollupPluginSwcOption = {
  syntax: "typescript",
  jsc: {
    loose: false, // 通常不推荐启用
    target: "esnext", // 编译成哪个版本
  },
  module: { type: "es6" }, // 编译后代码的模块化方案
};
