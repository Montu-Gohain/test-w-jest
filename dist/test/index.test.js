// src/test/index.test.ts
var { helloWorld } = jest.requireActual("../index.ts");
describe("Testing out the test suite", () => {
  test("Let's test the hello world function", () => {
    const msg = "Hello World";
    expect(helloWorld()).toBe(msg);
  });
});
