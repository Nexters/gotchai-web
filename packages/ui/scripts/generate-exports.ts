import fg from "fast-glob";
import path from "path";
import fs from "fs";

console.log(
  "📦 [generate-exports] 시작: 빌드된 파일을 기반으로 exports 생성 중..."
);

const files = fg.sync(["dist/**/*.{js,mjs,cjs,d.ts,d.mts}"], {
  cwd: process.cwd(),
  onlyFiles: true,
});

type ExportEntry = {
  types?: string;
  import?: string;
  require?: string;
};

// 1. 결과를 저장할 맵
const exportsMap: Record<string, ExportEntry> = {};
const fileMap = new Map<string, ExportEntry>();

// 2. 파일 분류 및 매핑
files.forEach((filePath) => {
  const rel = filePath.replace(/^dist\//, "");
  const noExt = rel
    .replace(/\.mjs$/, "")
    .replace(/\.js$/, "")
    .replace(/\.cjs$/, "")
    .replace(/\.d\.mts$/, "")
    .replace(/\.d\.ts$/, "");

  const key = `./${noExt}`;
  const fullPath = `./dist/${rel}`;

  // "./index"는 별도로 처리 (exports["."] 및 root types)
  if (key === "./index") return;

  if (!fileMap.has(key)) {
    fileMap.set(key, {});
  }

  const entry = fileMap.get(key)!;

  if (filePath.endsWith(".mjs")) {
    entry.import = fullPath;
  } else if (filePath.endsWith(".js") || filePath.endsWith(".cjs")) {
    entry.require = fullPath;
  } else if (filePath.endsWith(".d.mts")) {
    entry.types = fullPath;
  } else if (filePath.endsWith(".d.ts") && !entry.types) {
    entry.types = fullPath;
  }

  console.log(`✅ [exports] ${key} → ${rel}`);
});

// 3. 루트 (".") 경로 수동 처리
const rootExport: ExportEntry = {
  import: "./dist/index.mjs",
  require: "./dist/index.js",
};

// root types (루트 필드로 뺄 것)
const rootTypes = "./dist/index.d.mts";
const hasRootTypes =
  files.includes("dist/index.d.mts") || files.includes("dist/index.d.ts");
if (!hasRootTypes) {
  console.warn(
    "⚠️ [경고] 루트 타입 선언 파일(index.d.mts or .d.ts)이 존재하지 않습니다."
  );
}

// 4. 각 항목 병합
exportsMap["."] = rootExport;

Array.from(fileMap.entries()).forEach(([key, entry]) => {
  // 필드 순서 정렬: types → import → require
  const sorted: ExportEntry = {};
  if (entry.types) sorted.types = entry.types;
  if (entry.import) sorted.import = entry.import;
  if (entry.require) sorted.require = entry.require;
  exportsMap[key] = sorted;
});

// 5. package.json 수정
const pkgPath = path.resolve(process.cwd(), "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

pkg.exports = {
  ...pkg.exports,
  ...exportsMap,
};
pkg.types = rootTypes;

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(
  "🎉 [완료] package.json 의 exports 필드 및 types 필드가 성공적으로 생성되었습니다."
);
