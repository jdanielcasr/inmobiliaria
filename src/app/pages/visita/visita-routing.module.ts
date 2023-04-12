import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechaComponent } from './fecha/fecha.component';

const routes: Routes = [
  {
    path:'fecha',
    component:FechaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
