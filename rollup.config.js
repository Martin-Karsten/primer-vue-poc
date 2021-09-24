import path from "path";
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import vue from "rollup-plugin-vue"; // v5.x for vue2
import styles from "rollup-plugin-styles";
import { createFilter } from "@rollup/pluginutils";

const filter = createFilter(/\.vue$/);
const formats = [`esm`, `umd`];

export default {
  input: path.resolve(__dirname, `src/index.ts`),
  output: formats.map((format) => ({
    file: `dist/browser.${format}.js`,
    format,
    sourcemap: true,
    name: `primer-vue`,
    globals: {
      vue: `Vue`,
    },
  })),
  external: [`vue`],
  plugins: [
    // create a simple plugin to resect style for .vue file
    {
      name: `primer-vue`,
      transform: async (code, id) => {
        if (!filter(id)) return null;

        return {
          code: code.replace(/<style.*>[\s\S]*<\/style.*>/gi, ``),
          map: null,
        };
      },
    },
    json({ namedExports: false }),
    image(),
    nodeResolve({ preferBuiltins: true }),
    vue({ needMap: false }),
    styles({
      mode: `extract`,
      onExtract: () => false,
    }),
    typescript({
      check: true,
      tsconfig: path.resolve(__dirname, `tsconfig.json`),
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: false,
          declaration: true,
          declarationMap: true,
        },
        exclude: [`**/__tests__`],
      },
    }),
  ],
};
