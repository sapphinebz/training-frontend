import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AddProduct, EditProduct, Product } from '@models/product.model';
import { WebApiService } from './api-global/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private editProduct: EditProduct;
  
  constructor(private webApi: WebApiService,private http:HttpClient) { }

  getAllProduct(){ // Bootcamp
    return this.webApi.get<Product[]>('product');
  }

  addProduct(addProduct: AddProduct){
    const formData = new FormData();
    formData.append('name',addProduct.name);
    formData.append('stock',`${addProduct.stock}`);
    formData.append('price',`${addProduct.price}`);
    formData.append('photo',addProduct.photo);
    return this.webApi.postFormData<Product,FormData>
    ('product',formData);
  }

  deleteProduct(id: number){
    return this.webApi.delete(id,'product');
  }

  setEditProduct(product: EditProduct){
    this.editProduct = product;
  }

  getEditProduct(){
    return this.editProduct;
  }

  getProductById(id: number){
    return this.webApi.get<Product>(`product/${id}`);
  }

  getImageProduct(imageName: string){
    const prefixUrl = environment.baseImageUrl;
    return this.http
      .get(`${prefixUrl}images/${imageName}`, { responseType: 'blob' })
  }
}
