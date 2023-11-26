// ? 167 : Two sum || - Input array is sorted

export const twoSum = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  do {
    const current_sum = numbers[left] + numbers[right];

    if (current_sum === target) {
      return [left + 1, right + 1];
    } else if (current_sum < target) {
      left++;
    } else {
      right--;
    }
  } while (left < right);
  return [];
};
