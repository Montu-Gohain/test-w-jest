// 11.  Container with Most water

export function maxArea(height: number[]): number {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;

  do {
    const h = Math.min(height[left], height[right]);
    const w = right - left;
    max_area = Math.max(max_area, h * w);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  } while (left < right);

  return max_area;
}
