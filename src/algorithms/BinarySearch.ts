import { nums } from "../test_cases/global_test_cases";

export const BinarySearch = (haystack: number[], needle: number): number => {
  let left = 0;
  let right = haystack.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (haystack[mid] === needle) {
      return mid;
    } else if (needle < haystack[mid]) {
      right = mid;
    } else if (needle > haystack[mid]) {
      left = mid + 1;
    }
  }

  return -1;
};

let ans = BinarySearch(nums, 5);
console.log(`Element 5 exist in index : ${ans}`);

ans = BinarySearch(nums, 85);
console.log(`Element 85 exist in index : ${ans}`);
