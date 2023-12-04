import type * as TestFunctions from "../Leetcode/70";
const { climbStairs } =
  jest.requireActual<typeof TestFunctions>("../Leetcode/70");

describe("📃 Test suite for 70.Climbing stairs", () => {
  test("🧪 testing out climbStains function", function () {
    const n = 3;
    expect(climbStairs(n)).toBe(3);
  });
});
