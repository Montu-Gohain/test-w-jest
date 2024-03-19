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

// src/Leetcode/167.ts
var __exports = {};
__export(__exports, {
  twoSum: () => twoSum
});
module.exports = __toCommonJS(__exports);
var twoSum = (numbers, target) => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  twoSum
});
