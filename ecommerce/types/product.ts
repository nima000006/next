export interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  slug: string;
  image?: string;
  category?: { name: string; slug: string }[];
}
