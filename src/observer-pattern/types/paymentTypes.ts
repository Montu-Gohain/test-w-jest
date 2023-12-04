export interface paymentData {
  id: number;
  username: string;
  product: string;
}
export interface Observer {
  update({ id, product, username }: paymentData): void;
}
