import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Page1Component } from './page1/page1.component';
import { IdCardPageComponent } from './id-card-page/id-card-page.component';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
 
const appRoute : Routes=[
  {path:'idCardGenerated', component: IdCardPageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    IdCardPageComponent
  ],
  imports: [
    
    BrowserModule,
    QRCodeModule,
    AppRoutingModule,
    FormsModule,
    PdfViewerModule,
    RouterModule.forRoot(appRoute)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
