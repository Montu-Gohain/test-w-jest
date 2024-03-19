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

// src/Leetcode/202.ts
var __exports = {};
__export(__exports, {
  isHappy: () => isHappy
});
module.exports = __toCommonJS(__exports);
function isHappy(n) {
  const getSumofSquares = (num) => {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  let slow = n;
  let fast = n;
  do {
    slow = getSumofSquares(slow);
    fast = getSumofSquares(getSumofSquares(fast));
  } while (slow !== fast);
  return slow === 1;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isHappy
});
