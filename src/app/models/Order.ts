class Order {
  id: number;
  orderDate: Date;
  requiredDate: Date;
  shippedDate: Date;
  nrOrderDetails: number;

  constructor(id: number, orderDate: Date, requiredDate: Date, shippedDate: Date, nrOrderDetails: number) {
    this.id = id;
    this.orderDate = orderDate;
    this.requiredDate = requiredDate;
    this.shippedDate = shippedDate;
    this.nrOrderDetails = nrOrderDetails;
  }
}
export default Order;
