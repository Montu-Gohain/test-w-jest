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

// src/algorithms/BinarySearch.ts
var BinarySearch_exports = {};
__export(BinarySearch_exports, {
  BinarySearch: () => BinarySearch
});
module.exports = __toCommonJS(BinarySearch_exports);
var BinarySearch = (haystack, needle) => {
  let left = 0;
  let right = haystack.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (haystack[mid] === needle) {
      return mid;
    } else if (needle < haystack[mid]) {
      right = mid - 1;
    } else if (needle > haystack[mid]) {
      left = mid + 1;
    }
  }
  return -1;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BinarySearch
});
