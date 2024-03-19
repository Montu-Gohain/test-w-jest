import { nums } from "../test_cases/global_test_cases";

export const LinearSearch = (haystack: number[], needle: number): number => {
  for (let i = 0; i < haystack.length; ++i) {
    if (needle === haystack[i]) {
      return i;
    }
  }
  return -1; // If we don't find the element in the array ,we'll return -1
};

let ans = LinearSearch(nums, 5);
console.log(`Element 5 exist in index : ${ans}`);

ans = LinearSearch(nums, 87);
console.log(`Element 87 exist in the index : ${ans}`);
