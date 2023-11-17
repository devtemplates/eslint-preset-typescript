/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// NOTE: This is a very basic test which more or less ensures that the file is
// being linted. It works by disabling rules and running eslint with the
// --report-unused-disable-directives flag.
export function test() {
  const a = 1; // eslint-disable-line @typescript-eslint/no-unused-vars
  debugger; // eslint-disable-line no-debugger
  return false;
}
