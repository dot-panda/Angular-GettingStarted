import { Component } from '@angular/core';


@Component({ // component decorator
  selector: 'pm-root', // directive name used in html
  template: `
  <div style="text-align:center">
  <h1>
    {{pageTitle}}
  </h1>
  <div>My First Component</div>
  <pm-products></pm-products>
  ... Starter Files ...
  </div>
  `
  // './app.component.html', // view template and layout
  // styleUrls: ['./app.component.css']

})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
