import { Component } from '@angular/core';

@Component({ // component decorator
  selector: 'pm-root', // directive name used in html
  templateUrl:

   './app.component.html', // view template and layout
   styleUrls: ['./app.component.css']

})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
