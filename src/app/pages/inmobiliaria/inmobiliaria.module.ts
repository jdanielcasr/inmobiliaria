import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmobiliariaRoutingModule } from './inmobiliaria-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    InmobiliariaRoutingModule
  ]
})
export class InmobiliariaModule { }
