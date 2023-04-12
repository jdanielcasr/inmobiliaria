import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  user = {
    'id': '',
    'nombre': '',
    'telefono': '',
    'direccion': ''
  };

  action = 'create'
  

  constructor(public admin: AdminService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // if (this.admin.departmentCurrent) {
    //   this.user = this.admin.departmentCurrent;
    // }
    this.getDepartment()
  }

  getDepartment():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['id']
        if(id){
          
          let user = this.admin.departments.filter(e=>{
            return e['id'] == id
          })
          this.user = user[0]
          this.action = 'edit'
        }
      }
    )
  }
  addDepartment() {

    Swal.fire(
      'Exito!',
      'El departamneto ha sido agregado!',
      'success'
    );
    
    this.admin.departments.unshift(this.user);
    this.router.navigate(['pages/department/list']);
  }

  editDepartment(user) {

    this.admin.departmentCurrent = user;
    let index = this.admin.departments.findIndex(e=>{
      return e['id'] == user.id
    })
    if (index==0 || index){
      console.log(this.user)
      console.log(user)
      console.log(this.admin.departments[index])
      Swal.fire(
        'Exito!',
        'El departamento ha sido editado!',
        'success'
      );
      this.admin.departments[index] = user
      this.router.navigate(['pages/department/list']);
    }
    else{
      Swal.fire(
        'Error!',
        'Hubo un problema al editar el departamento',
        'error'
      );

    }
  }
}
