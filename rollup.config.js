import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/app.ts",
  output: {
    dir: "dist",
    assetFileNames: "[name]-[hash][extname]",
  },
  plugins: [
    typescript(),
    postcss({
      extract: true,
      modules: true,
    }),
    nodeResolve(),
  ],
};
