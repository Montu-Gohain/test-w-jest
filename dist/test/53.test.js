// src/test/53.test.ts
var { maxSubArray } = jest.requireActual("../Leetcode/53");
var test_cases = [
  {
    input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    output: 6
  },
  {
    input: [5, 4, -1, 7, 8],
    output: 23
  },
  {
    input: [1],
    output: 1
  },
  {
    input: [],
    output: 0
  }
];
describe("\u{1F4C3} Test suite for 53. MaxSubArray leetcode question", () => {
  test("\u{1F9EA} Testing out maxSubArray function", () => {
    test_cases.map(
      (case_) => expect(maxSubArray(case_.input)).toBe(case_.output)
    );
  });
});
