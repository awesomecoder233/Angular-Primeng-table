import { Component, OnInit } from '@angular/core';
            
import {Flight} from '../model/flight';
import {FlightsService} from "../service/flight.service";

@Component({
selector: 'app-my-flights',
templateUrl: './my-flights.component.html',
styleUrls: ['./my-flights.component.scss']
})
export class MyFlightsComponent implements OnInit {

public flights : Flight[] = [];

constructor(private flightService: FlightsService) {
    this.flights = [];
}

ngOnInit() {
    this.flights = this.flightService.getMyFlights();
}

}