import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  departmentCurrent;
  
  departments = [
    {
      "id": "1",
      "nombre": "Fisica",
      "direccion": "Calle",
      "telefono": "3234234"
    },
    {
      "id": "2",
      "nombre": "Ingeniería",
      "direccion": "Calle 65",
      "telefono": "52122"
    },
    {
      "id": "3",
      "nombre": "Matematicas",
      "direccion": "Calle 89",
      "telefono": "3214"
    }
  ];

  constructor() { }
}
