import type * as TestFunctions from "../Leetcode/48";

const { rotate } = jest.requireActual<typeof TestFunctions>("../Leetcode/48");

let test_cases = [
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
  {
    input: [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    output: [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  },
];

describe("📃 Test suite for 48.Rotate the image leetcode problem", () => {
  test("🧪 Testing out rotate function", () => {
    test_cases.map((case_) => {
      rotate(case_.input);
      expect(case_.input).toEqual(case_.output);
    });
  });
});
