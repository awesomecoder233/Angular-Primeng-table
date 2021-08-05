import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFlightsComponent } from './component/my-flights.component';

const routes: Routes = [
{ path:'', component: MyFlightsComponent},
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }