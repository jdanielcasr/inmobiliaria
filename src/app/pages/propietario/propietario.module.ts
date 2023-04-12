import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropietarioRoutingModule } from './propietario-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    PropietarioRoutingModule
  ]
})
export class PropietarioModule { }
