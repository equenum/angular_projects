import { Component } from '@angular/core';

@Component({
  selector: 'app-servers', // works as a CSS selector, can select by attribute, class, but not id or pseudo-selectors
  templateUrl: './servers.component.html',
  // 'template' used to write inline html.
  // Usually only makes sense if there are only 2 - 3 lines.
  // In other cases, it is best to extract into a separate file and use 'templateUrl'.
  //template: ` <app-server>Loading...</app-server>`,
  styleUrl: './servers.component.css',
  // same with 'styleUrl' and 'styles'.
  // styles: [
  //   `
  //     h3 {
  //       color: darkblue;
  //     }
  //   `,
  // ],
})
export class ServersComponent {
  enableAddingNew = false;

  constructor() {
    setTimeout(() => {
      this.enableAddingNew = true;
    }, 2000);
  }
}