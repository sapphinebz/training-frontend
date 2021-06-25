import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProduct } from '@models/product.model';
import { ProductService } from '@services/product.service';
import { MessageService } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  
  ngOnInit(): void {

  }
 
}
