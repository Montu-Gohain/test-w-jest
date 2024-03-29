// src/test/118.test.ts
var { generate } = jest.requireActual("../Leetcode/118.ts");
test("Testing out pascal's triangle generate function", () => {
  const rowNums = 5;
  const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  expect(generate(rowNums)).toEqual(output);
});
