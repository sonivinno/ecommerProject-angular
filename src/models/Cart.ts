import { Product } from "./product";

export interface Cart extends Product {
  cartId: string;
}
