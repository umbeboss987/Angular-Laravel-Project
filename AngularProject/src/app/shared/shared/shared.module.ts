import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {  
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
  ],
  exports:[
    TranslateModule
  ]
})
export class SharedModule {
  constructor(private translate: TranslateService){}
 }
