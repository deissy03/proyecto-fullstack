import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CreateService } from '../../services/create.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  registrationForm: FormGroup;
  registrationSuccess = false;
  toastrservice = inject(ToastrService);
  privateRouter = inject(Router);

  constructor(private createService: CreateService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      nombre: ['', Validators.required],
      correoElectronico: ['', [Validators.required]],
      contrasenia: ['', Validators.required],

    });
  }

  onSubmit() {
    if (this.registrationForm?.valid) {
      const formData = this.registrationForm.value;
  
      if (this.registrationForm?.get('name')?.invalid) {
        this.toastrservice.error('El nombre es requerido y debe tener al menos 4 caracteres.');
      } else if (this.registrationForm?.get('password')?.invalid) {
        this.toastrservice.error('La contraseña debe cumplir con los requisitos de seguridad.');
      } else {
        this.createService.crearUsuario(formData)
        .subscribe((response) => {
            if (response.resultado === 'bien') {
              console.log('User created successfully:', response.datos);
              this.registrationSuccess = true;
              this.toastrservice.success(
                '¡Usuario creado exitosamente!'
              );
              this.privateRouter.navigate(['/shop']);
            } else {
              console.error('Error creating user:', response.mensaje);
              console.log('error: ', Error);
            }  this.toastrservice.error(
              'Hubo un error al crear el usuario'
            );
          });
      }
    }
  } 
}
//import { Component,inject,OnInit } from '@angular/core';
//import { RouterLink } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//import { ToastrService } from 'ngx-toastr';
//import { LoginService } from '../../services/login.service';
//import { CreateService} from '../../services/create.service';
/*@Component({
  selector: 'app-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {
  loginService = inject(LoginService);
  toastrService = inject(ToastrService);
  constructor(private http:HttpClient,private createService:CreateService){}
  ngOnInit(): void {}
crearUsuario(userData: any){
 this.createService.crearUsuario(userData)
  .subscribe((response)=>{
      console.log ("usuario registrado exitosamente");

    },
  (error)=>{
   console.log("error al registrar el usuario");
  });
  }}*/
 
    /*export class createComponent { 
    createService: CreateService= inject (CreateService)
  
    nombre:String="";
    correoElectronico:String="";
    contrasenia:String="";
  
    handleSubmit(){
      if (this.correoElectronico){
        this.createService
        .crearUsuario(this.nombre, this.correoElectronico, this.contrasenia )
        .subscribe((response:any)=>{
          console.log("response:", response);
        });
      }else{
        console.log("mal")
      }
    }
  }*/