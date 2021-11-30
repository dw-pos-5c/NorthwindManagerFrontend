class Order {
  id: number;
  orderDateMillis: number;
  requiredDateMillis: number;
  shippedDateMillis: number;
  nrOrderDetails: number;

  constructor(id: number, orderDateMillis: number, requiredDateMillis: number, shippedDateMillis: number, nrOrderDetails: number) {
    this.id = id;
    this.orderDateMillis = orderDateMillis;
    this.requiredDateMillis = requiredDateMillis;
    this.shippedDateMillis = shippedDateMillis;
    this.nrOrderDetails = nrOrderDetails;
  }
}
export default Order;
