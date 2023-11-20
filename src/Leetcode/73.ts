//? 73 : SetZeroes
type Matrix = number[][];

export function setZeroes(matrix: Matrix): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const zeroRows = new Array(rows).fill(false);
  const zeroCols = new Array(cols).fill(false);

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (zeroRows[i] || zeroCols[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}
export const isEqualMatrices = (mat_1: Matrix, mat_2: Matrix): boolean => {
  const rows = mat_1.length;
  const cols = mat_1[0].length;

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (mat_1[i][j] !== mat_2[i][j]) {
        return false;
      }
    }
  }
  return true;
};
