// src/test/73.test.ts
var { isEqualMatrices, setZeroes } = jest.requireActual("../Leetcode/73");
describe("Let's Test out our leetcode solution", () => {
  let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ];
  let ans = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1]
  ];
  test("Let's test out these funcions", () => {
    expect(isEqualMatrices(matrix, ans)).toBe(false);
    setZeroes(matrix);
    expect(isEqualMatrices(matrix, ans)).toBe(true);
  });
});
