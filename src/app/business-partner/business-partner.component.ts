import {Component} from '@angular/core';
import {BusinessPartner} from "./models/BusinessPartner";

@Component({
  selector: 'business-partner',
  templateUrl: 'app/business-partner/business-partner.component.html'
})
export class BusinessPartnerComponent {
  public bp: BusinessPartner = null;


  constructor() {
    this.bp = this.createBp();
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
}
