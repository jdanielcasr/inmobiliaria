import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public admin: AdminService, private router: Router) { }

  ngOnInit(): void {
    if (this.admin.departmentCurrent) {
      this.user = this.admin.departmentCurrent;
    }
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
}
