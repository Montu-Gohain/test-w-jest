// src/test/167.test.ts
var { twoSum } = jest.requireActual("../Leetcode/167.ts");
var test_cases = [
  {
    numbers: [2, 7, 11, 15],
    target: 9,
    ans: [1, 2]
  },
  {
    numbers: [2, 3, 4],
    target: 6,
    ans: [1, 3]
  },
  {
    numbers: [-1, 0],
    target: -1,
    ans: [1, 2]
  },
  {
    numbers: [3, 4],
    target: 51,
    ans: []
  },
  {
    numbers: [1, 2, 3, 4, 5],
    target: 9,
    ans: [4, 5]
  }
];
describe("Solving Question no : 167. Two sum || - Array is sorted", () => {
  test("Testing out twoSum solution", () => {
    test_cases.map(
      (case_) => expect(twoSum(case_.numbers, case_.target)).toEqual(case_.ans)
    );
  });
});
