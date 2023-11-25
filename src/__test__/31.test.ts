import { nextPermutation } from "../Leetcode/31";

test("Testing out nextPermuation function", () => {
  let input = [1, 1, 5];
  let output = [1, 5, 1];
  nextPermutation(input);
  expect(output).toEqual(output);
});
