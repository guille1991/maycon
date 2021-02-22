export class Producto {
  id: number;
  src: string;
  name: string;
  price: number;
  bulto: number;
  stock: number;

  constructor(pId = 0, pSrc = '', pName = '', pPrice = 0, pBulto = 0, pStock = 0) {
    this.id = pId;
    this.src = pSrc;
    this.name = pName;
    this.price = pPrice;
    this.bulto = pBulto;
    this.stock = pStock;
  }
}
