import {NgForm} from "@angular/forms";
import {readFormErrorKeys} from "../shared/form/read-form-error-keys";

export class BusinessPartnerForm {
  public ngForm: NgForm = null;
  public formErrorKeys: Array<string> = new Array();
  public formElementKeys: Array<string> = ['bpName', 'bpAddress'];

  public updateForm(ngForm: NgForm) {
    this.ngForm = ngForm;
    this.readFormErrorKeys();
  }

  private readFormErrorKeys() {
    this.ngForm.valueChanges.subscribe(() => {
      this.formErrorKeys = readFormErrorKeys(this.ngForm, this.formElementKeys);
    });
  }
}
