import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  emailReg: string = 'sergio@gmail.com';
  passReg: string = 'admin';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.email = "sergio@gmail.com";
  }

  login() {
    if (this.email === this.emailReg && this.password === this.passReg) {
      Swal.fire(
        'Bienvenido!',
        'Puedes ingresar al sistema!',
        'success'
      );

      this.router.navigate(['/pages/department/list']);


    } else {
      Swal.fire(
        'Error!',
        'Verifique usuario y contraseña!',
        'error'
      )
    }
  }

}
