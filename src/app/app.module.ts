import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
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
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
