import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProduct, EditProduct } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { MessageService } from 'primeng/api';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, exhaustMap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  @Input() mode: string;
  // @Input() product: EditProduct;

  // descriptionForm = new FormControl()
  // stockForm = new FormControl();
  // priceForm = new FormControl();

  // productFormGroup = new FormGroup({
  //   name: this.productNameForm,
  //   stock: this.stockForm,
  //   price: this.priceForm
  // })

  subscription = new Subscription();
  saveAction = new Subject<void>();

  save$ = this.saveAction.pipe(
    debounceTime(400),
    exhaustMap((_) => {
      const formData: AddProduct = this.productFormGroup.value;
      return this.productService.addProduct(formData);
    })
  );

  previewUrl: string;

  nameForm = new FormControl(null, Validators.required);
  stockForm = new FormControl(null, Validators.required);
  priceForm = new FormControl(null, Validators.required);
  photoForm = new FormControl();

  productFormGroup = new FormGroup({
    name: this.nameForm,
    stock: this.stockForm,
    price: this.priceForm,
    photo: this.photoForm,
  });

  // testProductFormGroup = new FormGroup({
  //   description: this.descriptionForm,
  //   product: this.productFormGroup
  // })

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.mode === 'edit') {
      this.productFormGroup.addControl('id', new FormControl());
      const editProduct = this.productService.getEditProduct();
      this.productService.getProductById(editProduct.id).pipe(
        switchMap((productById) => {
          return this.productService.getImageProduct(productById.image).pipe(
            map((blob) => {
              const file = new File([blob], productById.image);
              const product = {
                name: productById.name,
                stock: productById.stock,
                photo: file,
                price: productById.price,
                id: productById.id,
              };
              return product;
            })
          );
        })
      ).subscribe(productForForm=>{
        this.productFormGroup.patchValue(productForForm);
      })
      // editProduct.

      // this.productFormGroup.patchValue({name:'IceCreame',stock:10,price:100});
      // this.productFormGroup.patchValue(this.product);
    }

    this.subscription.add(
      this.save$.subscribe((response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Save Success',
        });
        this.router.navigate(['/product']);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectFileUpload(event: { files: FileList; originalEvent: any }) {
    const file = event.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    this.photoForm.setValue(file);
  }

  saveProduct() {
    this.productFormGroup.markAllAsTouched();

    if (this.productFormGroup.valid) {
      this.saveAction.next();
    }
  }

  cancelProduct() {
    this.productFormGroup.reset();
  }
}
