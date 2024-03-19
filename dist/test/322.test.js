// src/test/322.test.ts
var { coinChange } = jest.requireActual("../Leetcode/322.ts");
describe("Testing out our first dynamic programming problem", () => {
  test("Coin change solution testing", () => {
    const coins = [1, 2, 5];
    const amount = 11;
    const fail_case = [2];
    const fail_amount = 3;
    expect(coinChange(coins, amount)).toBe(3);
    expect(coinChange(fail_case, fail_amount)).toBe(-1);
  });
});
