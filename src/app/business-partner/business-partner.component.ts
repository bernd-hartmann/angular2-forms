import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {BusinessPartner} from "./models/BusinessPartner";
import {NgForm} from "@angular/forms";
import {BusinessPartnerForm} from "./business-partner.form";


@Component({
  selector: 'business-partner',
  templateUrl: 'app/business-partner/business-partner.component.html'
})
export class BusinessPartnerComponent implements OnInit, AfterViewChecked {
  @ViewChild('bpNgForm') bpNgForm: NgForm;

  public bp: BusinessPartner = null;
  public bpForm: BusinessPartnerForm = null;


  constructor() {
    this.bp = this.createBp();
  }

  public ngOnInit() {
    this.bpForm = new BusinessPartnerForm();
  }

  public ngAfterViewChecked() {
    this.bpForm.readFormErrorKeys(this.bpNgForm);
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
