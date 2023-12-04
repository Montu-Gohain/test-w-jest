import type * as TestFunctions from "../Leetcode/11";
const { maxArea } = jest.requireActual<typeof TestFunctions>("../Leetcode/11");

const test_cases = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    ans: 49,
  },
  {
    height: [1, 1],
    ans: 1,
  },
];

describe("📃 Test suite for 11.Container with most water.", () => {
  test("🧪 It should give the max area ", () => {
    test_cases.map((case_) => expect(maxArea(case_.height)).toBe(case_.ans));
  });
});
