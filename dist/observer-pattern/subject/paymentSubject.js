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

// src/observer-pattern/subject/paymentSubject.ts
var paymentSubject_exports = {};
__export(paymentSubject_exports, {
  paymentSubject: () => paymentSubject
});
module.exports = __toCommonJS(paymentSubject_exports);
var paymentSubject = class {
  observers = /* @__PURE__ */ new Set();
  notify({ id, username, product }) {
    this.observers.forEach(
      (observer) => observer.update({ id, username, product })
    );
  }
  subscribe(observer) {
    this.observers.add(observer);
  }
  unsubscribe(observer) {
    this.observers.delete(observer);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  paymentSubject
});
