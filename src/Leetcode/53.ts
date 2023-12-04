// 53. Maximum Subarray

export function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
