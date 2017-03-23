import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {BusinessPartner} from "./models/BusinessPartner";
import {NgForm} from "@angular/forms";
import {readFormErrorKeys} from "../shared/form/read-form-error-keys";


@Component({
  selector: 'business-partner',
  templateUrl: 'app/business-partner/business-partner.component.html'
})
export class BusinessPartnerComponent implements OnInit, AfterViewChecked {
  @ViewChild('bpNgForm') bpNgForm: NgForm;

  public formErrorKeys: Array<string> = new Array();
  public formElementKeys: Array<string> = ['bpName', 'bpAddress'];

  public bp: BusinessPartner = null;


  constructor() {
    this.bp = this.createBp();
  }

  public ngOnInit() {

  }

  public ngAfterViewChecked() {
    this.bpNgForm.valueChanges.subscribe(() => {
      this.formErrorKeys = readFormErrorKeys(this.bpNgForm, this.formElementKeys);
    });
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
