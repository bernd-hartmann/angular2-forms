import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {BusinessPartnerComponent} from './business-partner/business-partner.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, BusinessPartnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
