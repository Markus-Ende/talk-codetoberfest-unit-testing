export function assertEquals(expected: any, actual: any) {
  if (expected !== actual) {
    throw `Error: Expected "${expected}" but got "${actual}"`;
  }
}

export function assertTrue(expected: boolean) {
  if (!expected) {
    throw `Error: Expected "${expected}" to be true`;
  }
}
