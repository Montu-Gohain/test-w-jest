// src/test/11.test.ts
var { maxArea } = jest.requireActual("../Leetcode/11");
var test_cases = [
  {
    height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    ans: 49
  },
  {
    height: [1, 1],
    ans: 1
  }
];
describe("\u{1F4C3} Test suite for 11.Container with most water.", () => {
  test("\u{1F9EA} It should give the max area ", () => {
    test_cases.map((case_) => expect(maxArea(case_.height)).toBe(case_.ans));
  });
});
