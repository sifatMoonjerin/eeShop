import { Product } from './product';

export class CartProduct extends Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public category: string,
    public image: string,
    public quantity: number
  ) {
    super(id, title, price, description, category, image);
  }
}
