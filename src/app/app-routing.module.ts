import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '@layouts/log-in/log-in.component';
import { RegisterComponent } from '@layouts/register/register.component';
import { PageNotFoundComponent } from '@layouts/page-not-found/page-not-found.component';

import { ProductListComponent } from '@app/components/menus/product/product-list/product-list.component';
import { ProductCreateComponent } from '@menus/product/product-create/product-create.component';
import { ProductEditComponent } from '@menus/product/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'product', children: [
    { path: '', component: ProductListComponent },
    { path: 'edit', component: ProductEditComponent },
    { path: 'create', component: ProductCreateComponent }
  ]
},
  
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
