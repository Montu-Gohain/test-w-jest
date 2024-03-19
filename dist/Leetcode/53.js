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

// src/Leetcode/53.ts
var __exports = {};
__export(__exports, {
  maxSubArray: () => maxSubArray
});
module.exports = __toCommonJS(__exports);
function maxSubArray(nums) {
  if (nums.length === 0)
    return 0;
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  maxSubArray
});
