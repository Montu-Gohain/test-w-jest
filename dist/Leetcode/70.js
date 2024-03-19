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

// src/Leetcode/70.ts
var __exports = {};
__export(__exports, {
  climbStairs: () => climbStairs
});
module.exports = __toCommonJS(__exports);
var cache = {};
var fib = (n) => {
  if (n <= 1)
    return n;
  if (cache[n])
    return cache[n];
  cache[n] = fib(n - 1) + fib(n - 2);
  return cache[n];
};
var climbStairs = (n) => {
  return fib(n + 1);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  climbStairs
});
