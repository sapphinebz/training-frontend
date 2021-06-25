import { HttpClient } from '@angular/common/http';
import { UrlResolver } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { ProductService } from '@services/product.service';
@Directive({
  selector: '[appLoadImageName]',
})
export class LoadImageNameDirective implements OnChanges {
  @Input() appLoadImageName!: string;

  @Input() appLoadImageNameLoadingTemplate ?: TemplateRef<any>
  loadingView: EmbeddedViewRef<any>;
  constructor(
    private http: HttpClient,
    private domSanitizer: DomSanitizer,
    private el: ElementRef<HTMLImageElement>,
    private tpr:TemplateRef<any>,
    private vc:ViewContainerRef,
    private productService: ProductService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.appLoadImageNameLoadingTemplate){
      this.loadingView = this.vc.createEmbeddedView(this.appLoadImageNameLoadingTemplate);
    }
    this.productService.getImageProduct(this.appLoadImageName)
      .subscribe((blob) => {
        const url = URL.createObjectURL(blob);
        const safeUrl = this.domSanitizer.bypassSecurityTrustUrl(url);
        this.vc.createEmbeddedView(this.tpr,{$implicit:safeUrl})
        if(this.loadingView){
          this.loadingView.destroy();
        }
        

        
        // const safeUrl = this.domSanitizer.bypassSecurityTrustUrl(url);
        // this.el.nativeElement.src = url
        // this.el.nativeElement.alt = this.appLoadImageName;
      });
  }
}
