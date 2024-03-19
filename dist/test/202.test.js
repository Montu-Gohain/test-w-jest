// src/test/202.test.ts
var { isHappy } = jest.requireActual("../Leetcode/202");
var test_cases = [
  {
    input: 19,
    output: true
  },
  {
    input: 2,
    output: false
  }
];
describe("# \u{1F4C3}Test suite for isHappy function ", () => {
  test("\u{1F9EA} Let's test out isHappy function", () => {
    test_cases.map((case_) => {
      expect(isHappy(case_.input)).toBe(case_.output);
    });
  });
});
