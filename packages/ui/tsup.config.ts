import { defineConfig } from "tsup";
import glob from "fast-glob";

/** 빌드 시 모든 파일을 포함하기 위해서 사용 */
const entries = glob.sync(["index.ts", "components/*.tsx", "utils/*.ts"]);

export default defineConfig({
  entry: entries,
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true, // 타입 파일도 함께 생성
  splitting: false,
  clean: true,
  external: ["react", "react-dom"],
});
