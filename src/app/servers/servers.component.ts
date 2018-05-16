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
  btnEnabled = false;
  countDown = 5;
  hiddenEnabled = false;

  constructor() {
    setTimeout(() => {
      this.btnEnabled = true;
      this.hiddenEnabled = true;
    }, 5000);

    setInterval(() => {
      /*if (this.countDown > 0) {
        this.countDown -= 1;
      }*/
      this.countDown = (this.countDown > 0) ? this.countDown - 1 : 0;
    }, 1000);

  }

  ngOnInit() {
  }

}
