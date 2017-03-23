import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <div>
    <business-partner></business-partner>
  </div>`,
})
export class AppComponent {
  name = 'Angular';
}
