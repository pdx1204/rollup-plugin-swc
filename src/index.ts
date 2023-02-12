import type { Plugin as RollupPlugin } from "rollup";

import { transform } from "@swc/core";

export default function swc(option: any = {}): RollupPlugin {
  return {
    name: "swc",
    version: "0.0.1",
    transform(code, id) {
      transform(code).then((value) => {
        console.log(value);
      });
      console.log(code, id);
      return {
        code,
        map: null,
      };
    },
  };
}
