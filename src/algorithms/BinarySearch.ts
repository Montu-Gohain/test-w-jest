// Todo : Let's implement Binary Search , note : In Binary search the array elements are needed to be in sorted manner.

export const BinarySearch = (haystack: number[], needle: number): number => {
  let left = 0;
  let right = haystack.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (haystack[mid] === needle) {
      return mid;
    } else if (needle < haystack[mid]) {
      right = mid - 1;
    } else if (needle > haystack[mid]) {
      left = mid + 1;
    }
  }
  return -1;
};
