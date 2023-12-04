import { Observer, paymentData } from "../types/paymentTypes";

export class Shipment implements Observer {
  update({ id, product, username }: paymentData): void {
    console.log(
      `[${id}] : [shipment] team will pack one ${product} to ${username}`
    );
  }
}
