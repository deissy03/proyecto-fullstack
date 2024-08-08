import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(private httpClient:HttpClient) {}
  API_URL = "http://localhost:3000/usuarios";


    createUser(nombre: string, correoElectronico: string, contrasenia: string) {
      const user = {
        nombre,
        correoElectronico,
        contrasenia
      };
  
      return this.httpClient.post(this.API_URL, user, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

}



