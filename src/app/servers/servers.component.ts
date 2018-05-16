import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /* selector: '[app-servers]', */ /* using selector as property */
  /* selector: '.app-servers', */ /* using selector as class */
  templateUrl: './servers.component.html',
  /* template: '<app-server></app-server>',*/ /* using inline method */
  /* template:
  `<p><strong>This is the Server of the App
  </strong></p>`,*/ /* using inline method */

  styleUrls: ['./servers.component.css']
  /*
  styles: [
    `p {
      background-color: lightgreen;
  }`
  ] */  /* using inline method */

})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
