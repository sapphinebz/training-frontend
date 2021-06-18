import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '@app/app.component';

import { HeaderComponent } from '@layouts/header/header.component';
import { FooterComponent } from '@layouts/footer/footer.component';
import { MenuBarComponent } from '@layouts/menu-bar/menu-bar.component';
import { LogInComponent } from '@layouts/log-in/log-in.component';
import { RegisterComponent } from '@layouts/register/register.component';
import { PageNotFoundComponent } from '@layouts/page-not-found/page-not-found.component';

import { ProductListComponent } from '@menus/product/product-list/product-list.component';
import { ProductEditComponent } from '@menus/product/product-edit/product-edit.component';
import { ProductCreateComponent } from '@menus/product/product-create/product-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuBarComponent,
    LogInComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
