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

// src/observer-pattern/event/payment.ts
var payment_exports = {};
__export(payment_exports, {
  payment: () => payment
});
module.exports = __toCommonJS(payment_exports);
var payment = class {
  payment_subject;
  constructor(payment_subject) {
    this.payment_subject = payment_subject;
  }
  UPI({ id, username, product }) {
    console.log(
      `
	[${id}] : Payment received for one ${product} by ${username}
`
    );
    this.payment_subject.notify({ id, username, product });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  payment
});
