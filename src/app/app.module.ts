import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // this is needed in order to use ngModel databinding

import { AppComponent } from './app.component';

/* ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ExternalserverComponent } from './externalserver/externalserver.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { SuccessAlertComponent } from './successalert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ExternalserverComponent,
    ModalBasicComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule                     // this is needed in order to use ngModel databinding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
