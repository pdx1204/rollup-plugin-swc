import type { Plugin as RollupPlugin } from "rollup";

import { transformSync as transformSyncSwc } from "@swc/core";
import type { Options as SwcOption } from "@swc/core";
import { DEFAULT_OPTIONS } from "./constant";

export type RollupPluginSwcOption = SwcOption & {
  type: "typescript" | "ecmascript";
};

export default function swc(
  option: RollupPluginSwcOption = DEFAULT_OPTIONS
): RollupPlugin {
  const {
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
  } = option;

  return {
    name: "swc",
    version: "0.0.1",
    resolveId(source, importer, options) {
      if (!importer) {
        return null;
      }
      if (option.type === "typescript")
        return this.resolve(source + ".ts", importer, {
          skipSelf: true,
          ...options,
        });
      else
        return this.resolve(source, importer, {
          skipSelf: true,
          ...options,
        });
    },
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
