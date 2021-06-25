export interface Product {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export type OptionalProduct = Partial<Product>;

// export type AddProduct = Omit<OptionalProduct,'id'|'createdAt'|'updatedAt'>;

export interface EditProduct extends Omit<Product,'image'|'createdAt'|'updatedAt'>
{
  photo: string;
}

export interface AddProduct extends Omit<Product,'image'|'id'|'createdAt'|'updatedAt'>{
  photo: File;
}