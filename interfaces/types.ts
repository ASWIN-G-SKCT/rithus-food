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

interface Order {
  date: string;
  address: string;
  quantity: number;
  user: string;
}

export type { Product, User, Review, Order };
