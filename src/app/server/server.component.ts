import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
        color: white;
        margin: 2px 0px;
      }
    .offline {
        color: aqua;
        margin: 2px 0px;
    }
    `]
})

export class ServerComponent {
  serverId = 108;
  serverStatus: string;

  constructor () {
    this.serverStatus = (Math.random() * 5 < 2) ? 'Offline' : 'Online';
  }

  setServerStatusColor () {
    return (this.serverStatus === 'Online') ? '#018786' : '#B00020';
  }

}
