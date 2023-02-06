import { Timestamp } from "firebase/firestore";

interface Product {
  _id: string;
  name: string;
  baseQuantity: string;
  price: number;
  description: string;
  ingredients: string[];
  preparation: string[];
  benefits: string[];
  category: string;
  images: string[];
  discount: number;
  itemsInStock: number;
}

interface HotDeal {
  _id: string;
  title: string;
  image: string;
}

interface User {
  name: string | null;
  id: string;
  email: string | null;
  verified: boolean;
  admin: boolean;
}

interface Review {
  date: string;
  product: string;
  stars: number;
  text: string;
  user: string;
}

type OrderItem = {
  product: Product;
  quantity: number;
};

type TAddress = {
  door: string;
  landmark?: string;
  city: string;
  state: string;
};
interface Order {
  _id: string;
  date: Timestamp;
  address: TAddress;
  items: OrderItem[];
  status: "dispatched" | "ordered" | "arrived";
  user: string;
}

export type { Product, User, Review, Order, HotDeal, TAddress };
