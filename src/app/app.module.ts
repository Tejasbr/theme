import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendingComponent } from './pending/pending.component';
import { RejectedComponent } from './rejected/rejected.component';
import { AcceptedComponent } from './accepted/accepted.component';
import { TransistComponent } from './transist/transist.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingComponent,
    RejectedComponent,
    AcceptedComponent,
    TransistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
