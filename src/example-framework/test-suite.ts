
  // define a test suite
export function describe(description: string, suite: Function) {
  console.log(`Running suite "${description}"`);
  suite();
}

// run a single test
export function it(description: string, testCase: Function) {
  console.log(`Running test case "${description}"`);
  testCase();
  console.log("OK");
}
