import type * as TestFunctions from "../Leetcode/53";

const { maxSubArray } =
  jest.requireActual<typeof TestFunctions>("../Leetcode/53");

const test_cases = [
  {
    input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    output: 6,
  },
  {
    input: [5, 4, -1, 7, 8],
    output: 23,
  },
  {
    input: [1],
    output: 1,
  },
  {
    input: [],
    output: 0,
  },
];

describe("📃 Test suite for 53. MaxSubArray leetcode question", () => {
  test("🧪 Testing out maxSubArray function", () => {
    test_cases.map((case_) =>
      expect(maxSubArray(case_.input)).toBe(case_.output)
    );
  });
});
