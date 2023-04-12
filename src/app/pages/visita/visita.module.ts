import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { FechaComponent } from './fecha/fecha.component';


@NgModule({
  declarations: [
    FechaComponent
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule
  ]
})
export class VisitaModule { }
