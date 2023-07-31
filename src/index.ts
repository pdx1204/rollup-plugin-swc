import type { Plugin as RollupPlugin } from "rollup";

import { transformSync as transformSyncSwc } from "@swc/core";
import type { Options as SwcOption, ParserConfig } from "@swc/core";
import { DEFAULT_OPTIONS } from "./constant";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { version } from "../package.json";

export type RollupPluginSwcOption = SwcOption & {
  syntax: "typescript" | "ecmascript";
};

export default function swc(option: RollupPluginSwcOption = DEFAULT_OPTIONS): RollupPlugin {
  const {
    syntax,
    script,
    cwd,
    caller,
    filename,
    root,
    rootMode,
    envName,
    configFile,
    swcrc,
    swcrcRoots,
    inputSourceMap,
    sourceFileName,
    sourceRoot,
    plugin,
    isModule,
    outputPath,
    test,
    exclude,
    env,
    module,
    minify,
    sourceMaps,
    inlineSourcesContent,
  } = { ...DEFAULT_OPTIONS, ...option } as RollupPluginSwcOption;

  const parser: ParserConfig = { syntax, ...option.jsc?.parser };

  const jsc = Object.assign({}, option.jsc, {
    parser,
  });
  return {
    name: "swc",
    version,
    transform(code, id) {
      const result = transformSyncSwc(code, {
        script,
        cwd,
        caller,
        filename,
        root,
        rootMode,
        envName,
        configFile,
        swcrc,
        swcrcRoots,
        inputSourceMap,
        sourceFileName,
        sourceRoot,
        plugin,
        isModule,
        outputPath,
        test,
        exclude,
        env,
        jsc,
        module,
        minify,
        sourceMaps,
        inlineSourcesContent,
      });

      return {
        code: result.code,
        map: result.map,
      };
    },
  };
}
