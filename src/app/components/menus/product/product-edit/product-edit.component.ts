import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
