import { Observer, paymentData } from "../types/paymentTypes";

export class Marketing implements Observer {
  update({ id, product, username }: paymentData): void {
    console.log(
      `[${id}] : [marketing] team will send an welcome email to ${username}`
    );
  }
}
