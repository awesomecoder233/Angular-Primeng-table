import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFlightsComponent } from './component/my-flights.component';
import { FlightsService } from './service/flight.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
declarations: [
AppComponent,
MyFlightsComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule,
],
providers: [FlightsService],
bootstrap: [AppComponent]
})
export class AppModule { }