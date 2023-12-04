import type * as TestFunctions from "../Leetcode/15";
const { threeSum } = jest.requireActual<typeof TestFunctions>("../Leetcode/15");

const test_cases = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    Output: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    nums: [0, 1, 1],
    Output: [],
  },
  {
    nums: [0, 0, 0],
    Output: [[0, 0, 0]],
  },
  {
    nums: [1, 2],
    Output: [],
  },
  {
    nums: [-1, 0, 0, 1, 1, 2, -1, -4],
    Output: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
];

describe("Solving ThreeSum", () => {
  test("Testing out threeSum function", () => {
    test_cases.map((case_) => {
      expect(threeSum(case_.nums)).toEqual(
        expect.arrayContaining(case_.Output)
      );
    });
  });
});
