import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FinanseManagerComponent} from "./finanse-manager/finanse-manager.component";
import {PowerCounterComponent} from "./power-counter/power-counter.component";
import {FinanseDetailComponent} from "./finanse-detail/finanse-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'finance', component: FinanseManagerComponent},
  { path: 'finance/:id', component: FinanseDetailComponent},
  { path: 'counter', component: PowerCounterComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports : [RouterModule.forRoot(routes)],
  declarations: []
})

export class AppRoutingModule {

}
