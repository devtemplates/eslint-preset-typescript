/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintConfigStandard from "eslint-config-standard";
import eslintConfigStandardTypescript from "eslint-config-standard-with-typescript";
import eslintParserTypescript from "@typescript-eslint/parser";
import eslintPluginN from "eslint-plugin-n";
import * as eslintPluginImport from "eslint-plugin-import";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginTSdoc from "eslint-plugin-tsdoc";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";

/* -----------------------------------------------------------------------------
 * constants
 * -------------------------------------------------------------------------- */

const DEFAULT_IGNORES = ["**/*.config.js", "dist/**/*", "docs/**/*"];
const JS_FILES = ["**/*.{js,jsx,cjs,mjs}"];
const TS_FILES = ["**/*.{ts,tsx}"];
const ALL_FILES = [...JS_FILES, ...TS_FILES];

/* -----------------------------------------------------------------------------
 * configs
 * -------------------------------------------------------------------------- */

// NOTE: eslint-config-standard has been updated but HAS NOT be published yet
// and there is currently no way to fetch the new config so we will manually
// grab/recreate relevant props.
const newEslintConfigStandard = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
    globals: {
      ...globals.es2021,
      ...globals.node,
      document: "readonly",
      navigator: "readonly",
      window: "readonly",
    },
  },
  plugins: {
    n: eslintPluginN,
    promise: eslintPluginPromise,
    import: eslintPluginImport,
  },
  rules: eslintConfigStandard.rules,
};

// NOTE: eslint-config-standard-with-typescript has not yet updated to the new
// config format so we will manually grab/recreate relevant props.
// Ref:
const newEslintConfigStandardTypescript = {
  languageOptions: {
    parser: eslintParserTypescript,
    parserOptions: eslintConfigStandardTypescript.parserOptions,
  },
  plugins: {
    "@typescript-eslint": eslintPluginTypescript,
  },
  rules: eslintConfigStandardTypescript.rules,
};

const typescriptOverrides = {
  plugins: {
    tsdoc: eslintPluginTSdoc,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "tsdoc/syntax": "warn",
  },
};

/* -----------------------------------------------------------------------------
 * eslintPresetTypescript
 * -------------------------------------------------------------------------- */

export function eslintPresetTypescript({ ignores = DEFAULT_IGNORES } = {}) {
  return [
    // NOTE: These are applied globally when added as standalone config objects
    // Ref: https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
    { ignores },
    {
      ...newEslintConfigStandard,
      files: ALL_FILES,
    },
    {
      ...newEslintConfigStandardTypescript,
      files: TS_FILES,
    },
    {
      ...typescriptOverrides,
      files: TS_FILES,
    },
    {
      ...eslintConfigPrettier,
      files: ALL_FILES,
    },
  ];
}
