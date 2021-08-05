import { Component, OnInit } from '@angular/core';
            
import {Flight} from '../model/flight';
import {FlightsService} from "../service/flight.service";

@Component({
selector: 'app-my-flights',
templateUrl: './my-flights.component.html',
styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {
private flights : Flight[];

constructor(private flightService: FlightsService) {}

ngOnInit() {
    this.flights = this.flightService.getMyFlights();
}

}