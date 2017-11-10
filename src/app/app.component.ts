import {Component} from '@angular/core';
import {BusinessPartnerComponent} from "./business-partner/business-partner.component";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div>
    <business-partner></business-partner>
  </div>`,
})
export class AppComponent {
  name = 'Angular';

  constructor() {
    console.log('constructor app component');
    this.doTheOverwrite();
  }

  private doTheOverwrite() {
    let ref = BusinessPartnerComponent;
    let overwrittenMethod = ref.prototype['sayHello'];
    ref.prototype['sayHello'] = () => {
      overwrittenMethod();
      console.log('holla');
    };
  }
}
