import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditProduct, Product } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  queryAction = new BehaviorSubject(null);
  products$ = this.queryAction.pipe(
    switchMap(_=>{
      // console.log('switchMap');
      return this.productService.getAllProduct()
    })
  )
  // products: Product[] = [];
  // products$ = this.productService.getAllProduct();
  

  constructor(private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  query(){
    this.queryAction.next(null);
  }

  editProduct(product: Product){
    const editProduct: EditProduct = {
      name: product.name,
      price: product.price,
      photo: product.image,
      id: product.id,
      stock: product.stock
    }
    this.productService.setEditProduct(editProduct)
    this.router.navigate(['/product','edit'])
    
  }

  removeProduct(id: number){
    this.confirmationService.confirm({
      message: 'ลบจริงไหม? แน่ใจนะ',
      accept: () => {
          
        this.productService.deleteProduct(id).subscribe(_=>{
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Delete Success',
          });
    
          this.queryAction.next(null);
    
        })

      }
  });


    
  }



}
