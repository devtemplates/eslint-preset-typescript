/* -----------------------------------------------------------------------------
 * lint-staged config
 * -------------------------------------------------------------------------- */

export default {
  "**/*.(ts|js)?(x)": ["npx prettier --write", ""],
  // NOTE: We intentionally do not pass the files to eslint because we want to
  // ensure that the entire project lints correctly.
  "**/*.(ts|js)?(x)": () => "npx eslint --report-unused-disable-directives .",
};
