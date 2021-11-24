class OrderDetail {
  orderId: number;
  unitPrice: number;
  quantity: number;
  productName: string;

  constructor(orderId: number, unitPrice: number, quantity: number, productName: string) {
    this.orderId = orderId;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.productName = productName;
  }
}
export default OrderDetail;
