import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {BusinessPartner} from "./models/BusinessPartner";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'business-partner',
  templateUrl: 'app/business-partner/business-partner.component.html'
})
export class BusinessPartnerComponent implements OnInit, AfterViewChecked {
  @ViewChild('bpNgForm') bpNgForm: NgForm;

  public formErrorKeys: Array<string> = new Array();
  public formElementKeys: Array<string> = ['bpName'];

  public bp: BusinessPartner = null;


  constructor() {
    this.bp = this.createBp();

  }

  public ngOnInit() {

  }

  public ngAfterViewChecked() {
    this.bpNgForm.valueChanges.subscribe(() => {
      this.readFormErrors();
    });
  }

  public readFormErrors() {
    // reset
    this.formErrorKeys = new Array();

    if (!this.bpNgForm) {
      return;
    }
    const form = this.bpNgForm.form;

    this.formElementKeys.forEach((formElementKey: string) => {
      let formControl = form.get(formElementKey);
      for (const formErrorKey in formControl.errors) {
        this.formErrorKeys.push(formElementKey + "." + formErrorKey);
      }
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
