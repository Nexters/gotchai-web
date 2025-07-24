/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  ignorePatterns: [".eslintrc.cjs"],
  extends: ["@gotchai/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
