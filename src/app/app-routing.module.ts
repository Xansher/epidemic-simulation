import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsSimulationsComponent } from './simulations/details-simulations/details-simulations.component';
import { EditSimulationsComponent } from './simulations/edit-simulations/edit-simulations.component';
import { IndexSimulationsComponent } from './simulations/index-simulations/index-simulations.component';

const routes: Routes = [
  {path: '', redirectTo: 'simulations', pathMatch: 'full'},
  {path: 'simulations', component: IndexSimulationsComponent},
  {path: 'simulations/edit/:id', component: EditSimulationsComponent},
  {path: 'simulations/:id', component: DetailsSimulationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
