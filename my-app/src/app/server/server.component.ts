import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // unique html selector, usually starts with 'app-'
  templateUrl: './server.component.html',
  styleUrl: './server.component.css',
})
export class ServerComponent {
  // properties can be used in string interpolation data binding with the '{{ }}' syntax.
  // Inside of '{{ }}' we can put any expression that can be resolved in a string.
  // No multiline, loops or flow control statements though, only ternary is allowed.
  serverId = 123;
  status = '';

  constructor() {
    this.status = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.status;
  }

  getBgColor() {
    return this.status == 'Online' ? 'green' : 'red';
  }
}
