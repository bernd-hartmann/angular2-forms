import {NgForm} from "@angular/forms";

export function readFormErrorKeys(ngForm: NgForm, formElementKeys: Array<string>): Array<string> {
  let formErrorKeys: Array<string> = [];
  if (!ngForm) {
    return formErrorKeys;
  }
  const form = ngForm.form;

  formElementKeys.forEach((formElementKey: string) => {
    let formControl = form.get(formElementKey); // TODO: check why not both elements seemes to be part of form group
    if (formControl) {
      for (const formErrorKey in formControl.errors) {
        formErrorKeys.push(formElementKey + "." + formErrorKey);
      }
    }
  });

  return formErrorKeys;
}
