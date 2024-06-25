import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CreateService } from '../../services/create.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  createService = inject(CreateService);
// aqui estan los atributos del formulario que se enlazan para tener acceso a las propiedades 

  nombre:string = "";
  correoElectronico:string = "";
  contrasenia:string = "";

  handleSubmit(){
    /*console.log('...handleSubmit...');
    console.log(this.nombre);
    console.log(this.correoElectronico);
    console.log(this.contrasenia);*/

    if(this.nombre){
      this.createService.createUser(
        this.nombre,
        this.correoElectronico,
        this.contrasenia
      ).subscribe((response: any)=>{
        console.log("response:", response);
      })
    }
  }

}




