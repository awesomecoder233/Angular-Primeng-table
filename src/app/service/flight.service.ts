import { Injectable } from '@angular/core';
import { Flight } from "../model/flight";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class FlightsService {

    private MYFLIGHTS: Flight[] = [
    {"id": 1, "flightNumber" : "FS1298", "origin": "LAX", "destination" : "LHR", "departDay" : "Thursday",
        departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
    {"id": 2, "flightNumber" : "FS1201", "origin": "LAX", "destination" : "LHR", "departDay" : "Friday",
        departTime : "09:00", "arriveDay" : "Monday", arriveTime : "09:00", "price" : 99.99},
    ];

    constructor(private http: HttpClient) { }

    // to test with local mock data
    public getMyFlights() : Flight[]{
        return this.MYFLIGHTS;
    }
}