import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule
  ]
})
export class DepartamentModule { }
