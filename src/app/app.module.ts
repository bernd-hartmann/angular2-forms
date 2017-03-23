import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {BusinessPartnerComponent} from './business-partner/business-partner.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BusinessPartnerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
