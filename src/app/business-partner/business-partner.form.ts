import {NgForm} from "@angular/forms";
import {readFormErrorKeys} from "../shared/form/read-form-error-keys";

export class BusinessPartnerForm {
  public formErrorKeys: Array<string> = new Array();
  public formElementKeys: Array<string> = ['bpName', 'bpAddress'];

  public readFormErrorKeys(bpNgForm: NgForm) {
    bpNgForm.valueChanges.subscribe(() => {
      this.formErrorKeys = readFormErrorKeys(bpNgForm, this.formElementKeys);
    });
  }
}
