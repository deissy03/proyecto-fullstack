import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface UserData {
  nombre: string;
  correoElectronico: string;
  contrasenia: string;
 }
 
 @Injectable({
   providedIn: 'root'
 })
  export class CreateService {
    constructor(private http: HttpClient) {}
 

    crearUsuario(userData: UserData) {
      const apiUrl = 'http://localhost:3000/usuarios'; 
      return this.http.post<any>(apiUrl, userData);
    }
  }

/*@Injectable({
  providedIn: 'root'
})
export class CreateService {
  constructor() { }
  httpClient= inject(HttpClient);
  API_URL = "http://localhost:3000/usuarios/";
  crearUsuario(nombre:any, correoElectronico:any, contrasenia: any ){
  const formData = new FormData ();
  formData.append("nombre", nombre);
  formData.append("correoElectronico", correoElectronico);
  formData.append("contrasenia", contrasenia);
  return this.httpClient.post(this.API_URL,formData);

  }//
  /*constructor() {}
  httpClient = inject(HttpClient);
  toastrService = inject(ToastrService);
  router = inject(Router);

  API_URL = 'http://localhost:3000/usuario';
 //maneja inicio de sesion
 create(Credentials:Credentials){
  return this.httpClient.post(this.API_URL+ "/usuarios", Credentials );
 }
  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }*/

