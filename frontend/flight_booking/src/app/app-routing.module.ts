

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';
import { FlightAddComponent } from './components/flight-add/flight-add.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: 'flights', component: FlightComponent },
  { path: 'add-flight', component: FlightAddComponent },
  { path: 'flight-list', component: FlightListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

