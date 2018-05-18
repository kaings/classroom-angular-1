import { Component } from '@angular/core';


@Component({
  selector: 'app-externalserver',
  templateUrl: './externalserver.component.html',
  styles: [
  `button {
      margin: 10px 20px;
  }
  `]
})

export class ExternalserverComponent {

  createExternalServer = false;
  externalServerInput: string;

  constructor () {}

  onExternalServerInput (event: Event) {
    this.externalServerInput = (<HTMLInputElement>event.target).value;
  }

  onCreateExternalServer () {
    this.createExternalServer = true;
  }

}
