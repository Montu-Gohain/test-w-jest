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

// src/observer-pattern/subscribers/shipment.ts
var shipment_exports = {};
__export(shipment_exports, {
  Shipment: () => Shipment
});
module.exports = __toCommonJS(shipment_exports);
var Shipment = class {
  update({ id, product, username }) {
    console.log(
      `[${id}] : [shipment] team will pack one ${product} to ${username}`
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Shipment
});
