// src/test/70.test.ts
var { climbStairs } = jest.requireActual("../Leetcode/70");
describe("\u{1F4C3} Test suite for 70.Climbing stairs", () => {
  test("\u{1F9EA} testing out climbStains function", function() {
    const n = 3;
    expect(climbStairs(n)).toBe(3);
  });
});
