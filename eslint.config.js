const eslintConfigNext = require("@next/eslint-plugin-next");
const eslintPluginPrettier = require("eslint-plugin-prettier");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = [
  eslintConfigNext,
  {
    ignores: ["node_modules", "dist", ".next"],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      prettier: eslintPluginPrettier,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "prettier/prettier": "error",
      "react-hooks/exhaustive-deps": "warn",
      "simple-import-sort/imports": "error",
    },
  },
];
