import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { FlightAddComponent } from './components/flight-add/flight-add.component';
import { PassengerComponent } from './components/passenger/passenger.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightComponent,
    FlightListComponent,
   FlightAddComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule// Add FormsModule here for ngModel
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

