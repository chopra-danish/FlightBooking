import { Component } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css'],
})
export class FlightAddComponent {
  newFlight: Flight = {
    id: 0,
    flightNumber: '',
    airline: '',
    origin: '',
    destination: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
  };

  constructor(private flightService: FlightService) {}

  addFlight(): void {
    this.flightService.addFlight(this.newFlight).subscribe(
      () => {
        alert('Flight added successfully!');
        this.resetNewFlight();
      },
      (error) => {
        console.error('Error adding flight:', error);
        alert('Failed to add flight. Please try again.');
      }
    );
  }

  resetNewFlight(): void {
    this.newFlight = {
      id: 0,
      flightNumber: '',
      airline: '',
      origin: '',
      destination: '',
      departureTime: '',
      arrivalTime: '',
      price: 0,
    };
  }
}
