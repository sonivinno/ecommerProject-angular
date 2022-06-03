
import { Product } from "./product";

export enum OrderStatus {
    confirm,
    canceled
}

export interface Orderhistory{
    orderId : string,
    date: number,
    status: OrderStatus
    items: Product[];
    totlaPrice: string
    userAddress: Record<string, string | number>
}