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
  restartServer = 'No Server is Running...';
  serverNameInput = 'Some Input Here';

  servers = ['server1', 'server2'];

  initCount = 1;

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

  onRestartServer () {
    this.restartServer = 'Server is Running...';
  }

  onServerNameInput(event: Event) {
    // console.log(event);
    this.serverNameInput = (<HTMLInputElement>event.target).value;

    /* -- if event: any, the following line also works
    this.serverNameInput = event.target.value;
    */
  }

  onAddNewServer() {
    this.servers.push('New Server' + this.initCount++); // without this unique value of array, onRemoveServer will only remove item from the bottom.
  }

  onRemoveServer(id: number) {
    this.servers.splice(id, 1);
  }

}
