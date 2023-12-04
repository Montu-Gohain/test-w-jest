/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // Revese each row

  for (let i = 0; i < n; ++i) {
    matrix[i].reverse();
  }
}
