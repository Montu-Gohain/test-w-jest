import type * as TestFunctions from "../Leetcode/202";
const { isHappy } = jest.requireActual<typeof TestFunctions>("../Leetcode/202");

const test_cases = [
  {
    input: 19,
    output: true,
  },
  {
    input: 2,
    output: false,
  },
];

describe("# 📃Test suite for isHappy function ", () => {
  test("🧪 Let's test out isHappy function", () => {
    test_cases.map((case_) => {
      expect(isHappy(case_.input)).toBe(case_.output);
    });
  });
});
