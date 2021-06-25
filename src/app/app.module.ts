import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import { ImageModule } from 'shared/image/image.module';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { LoadingComponent } from './loading/loading.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { LoadingHourglassComponent } from './loading-hourglass/loading-hourglass.component';
import { ProductFormComponent } from './components/menus/product/product-form/product-form.component';
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
    ProductCreateComponent,
    LoadingComponent,
    LoadingHourglassComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataViewModule,
    ButtonModule,
    ImageModule,
    InputTextModule,
    InputNumberModule,
    FileUploadModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
