export function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length < 3) {
    return result; // There can't be triplets if the array length is less than 3
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;
    const target = -nums[i]; // To make the sum zero

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
