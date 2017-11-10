import {Component} from '@angular/core';
import {BusinessPartner} from "./models/BusinessPartner";

@Component({
  selector: 'business-partner',
  templateUrl: 'app/business-partner/business-partner.component.html'
})
export class BusinessPartnerComponent {
  public bp: BusinessPartner = null;


  constructor() {
    console.log('constructor businesspartner');
    this.bp = this.createBp();
    //this.overwriteLocal();

  }

  private overwriteLocal() {
    //let methodSayHello = this.sayHello;

    this.sayHello = () => {
      //methodSayHello();

      console.log('servus');
    };
  }

  private createBp(): BusinessPartner {
    return {
      partnerSince: new Date(),
      rating: 5,
      revenue: 501234.49,
      isPremium: true,
      name: "Huber",
      address: "Holzweg3"
    };
  }

  private sayHello() {
    console.log('hello');
  }

  public ngOnInit() {
    this.sayHello();
  }
}
