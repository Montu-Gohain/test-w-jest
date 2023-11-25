import type * as TestFunctions from "../Leetcode/73";
const { isEqualMatrices, setZeroes } =
  jest.requireActual<typeof TestFunctions>("../Leetcode/73");

describe("Let's Test out our leetcode solution", () => {
  let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  let ans = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ];

  test("Let's test out these funcions", () => {
    expect(isEqualMatrices(matrix, ans)).toBe(false);
    setZeroes(matrix);
    expect(isEqualMatrices(matrix, ans)).toBe(true);
  });
});
