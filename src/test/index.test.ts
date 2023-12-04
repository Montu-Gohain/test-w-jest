import type * as TestFunctions from "../index";
const { helloWorld } = jest.requireActual<typeof TestFunctions>("../index.ts");

describe("Testing out the test suite", () => {
  test("Let's test the hello world function", () => {
    const msg = "Hello World";
    expect(helloWorld()).toBe(msg);
  });
});
