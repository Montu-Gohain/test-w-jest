import { Observer, paymentData } from "../types/paymentTypes";

export class paymentSubject {
  private observers: Set<Observer> = new Set();

  notify({ id, username, product }: paymentData) {
    this.observers.forEach((observer: Observer) =>
      observer.update({ id, username, product })
    );
  }
  subscribe(observer: Observer) {
    this.observers.add(observer);
  }
  unsubscribe(observer: Observer) {
    this.observers.delete(observer);
  }
}
