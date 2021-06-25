import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadImageNameDirective } from './load-image-name.directive';



@NgModule({
  declarations: [
    LoadImageNameDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadImageNameDirective
  ]
})
export class ImageModule { }
