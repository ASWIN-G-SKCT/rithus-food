interface Product {
  _id: string;
  name: string;
  price: number;
}

interface User {
  name: string | null;
  id: string;
  email: string | null;
  verified: boolean;
  admin: boolean;
}

export type { Product, User };
