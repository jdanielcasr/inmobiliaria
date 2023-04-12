import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: Router,
    public admin: AdminService) { }

  ngOnInit(): void {

  }

  goToCreate() {
    this.router.navigate(['pages/department/create'])
  }

  deleteDepartment(pos) {

    Swal.fire({
      title: '¿Estas seguro de eliminar el departamento?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(
          'Exito!',
          'El departamento ha sido eliminado!',
          'success'
        );
        this.admin.departments.splice(pos, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  }

  editDepartment(department) {
    this.admin.departmentCurrent = department;
    this.router.navigate(['pages/department/create']);

  }

}
