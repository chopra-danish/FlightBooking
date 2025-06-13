import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/flight.model';  

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flights: Flight[] = [];  
  newFlight: Flight = {    
    id: 0,
    flightNumber: '',
    airline: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: 0
  };

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.getFlights();  // Load all flights on initialization
  }

  // Get all flights
  getFlights(): void {
    this.flightService.getFlights().subscribe((data) => {
      this.flights = data;  // Store the received flight data in the flights array
    });
  }

  // Add a new flight
  addFlight(): void {
    this.flightService.addFlight(this.newFlight).subscribe((flight) => {
      this.flights.push(flight);  // Add the new flight to the flights array
      this.resetNewFlight();  // Reset the newFlight object
    });
  }

  // Reset the newFlight form fields
  resetNewFlight(): void {
    this.newFlight = {
      id: 0,
      flightNumber: '',
      airline: '',
      origin: '',
      destination: '',
      departureTime: '',
      arrivalTime: '',
      price: 0
    };
  }
}
