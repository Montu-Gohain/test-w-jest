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

// src/Leetcode/11.ts
var __exports = {};
__export(__exports, {
  maxArea: () => maxArea
});
module.exports = __toCommonJS(__exports);
function maxArea(height) {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  maxArea
});
