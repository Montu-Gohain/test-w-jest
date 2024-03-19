var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Leetcode/73.ts
var __exports = {};
__export(__exports, {
  isEqualMatrices: () => isEqualMatrices,
  setZeroes: () => setZeroes
});
module.exports = __toCommonJS(__exports);
function setZeroes(matrix) {
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
var isEqualMatrices = (mat_1, mat_2) => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isEqualMatrices,
  setZeroes
});
