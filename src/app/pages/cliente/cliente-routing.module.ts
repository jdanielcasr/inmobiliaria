import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../inmobiliaria/list/list.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';

const routes: Routes = [

  {
    path: 'list',
    component:ListComponent,
  },

  {
    path: 'agregar',
    component:AgregarComponent,
  },

  {
    path:'consultar',
    component:ConsultarComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
