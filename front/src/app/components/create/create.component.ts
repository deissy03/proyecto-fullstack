import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { CreateService } from '../../services/create.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(private router: Router) { }
  redirectToOtraPagina() {
    this.router.navigate(['/login']);
  }

  toastrService = inject(ToastrService);
  loginService = inject(LoginService);
  createService = inject(CreateService);
// aqui estan los atributos del formulario que se enlazan para tener acceso a las propiedades 

  nombre:string = "";
  correoElectronico:string = "";
  contrasenia:string = "";

  handleSubmit(){
    if(this.nombre){
      this.createService.createUser(
        this.nombre,
        this.correoElectronico,
        this.contrasenia
      ).subscribe((response: any)=>{
        console.log("response:", response);
      })
    }
    this.redirectToOtraPagina();
  }
}



 











