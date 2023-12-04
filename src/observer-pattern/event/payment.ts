import { paymentSubject } from "../subject/paymentSubject";
import { paymentData } from "../types/paymentTypes";

export class payment {
  private payment_subject: paymentSubject;

  constructor(payment_subject: paymentSubject) {
    this.payment_subject = payment_subject;
  }

  UPI({ id, username, product }: paymentData) {
    console.log(
      `\n\t[${id}] : Payment received for one ${product} by ${username}\n`
    );
    this.payment_subject.notify({ id, username, product });
  }
}
