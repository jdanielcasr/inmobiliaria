import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarComponent } from './consultar/consultar.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    ConsultarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
