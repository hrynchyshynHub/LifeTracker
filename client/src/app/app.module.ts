import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FinanseManagerComponent } from './finanse-manager/finanse-manager.component';
import {FormsModule} from "@angular/forms";
import { FinanseDetailComponent } from './finanse-detail/finanse-detail.component';
import {FinanceService} from "./service/finance.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { PowerCounterComponent } from './power-counter/power-counter.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FinanseManagerComponent,
    FinanseDetailComponent,
    MessagesComponent,
    PowerCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FinanceService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
