/* -----------------------------------------------------------------------------
 * semantic-release config
 * -------------------------------------------------------------------------- */

// NOTE: This is the same configuration as used by the `semantic-release`
// package with the one exception that we have swapped "master" -> "main". This
// can/should be removed once the `semantic-release` package has been updated to
// use "main" as the default branch name.
// Ref: https://github.com/semantic-release/semantic-release/issues/1581
export default {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
};
