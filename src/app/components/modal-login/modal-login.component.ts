import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  isEmpty = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario: string = '';
  password: string = '';
  roles: string[] = [];
  showPassword = false;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }
  loginLoad: boolean = false;

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    if (this.nombreUsuario == '' || this.password == '') {
      this.isEmpty = true;
      return;
    }
    this.loginLoad= true;
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(
      data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // Recarga la página después de la acción
        location.reload();
      }, err =>{
        this.isLogged = false;
        console.error(err.message);
        this.isLogginFail = true;
        this.loginLoad= false;
        this.nombreUsuario = '';
        this.password = '';
      }
    )
  }

  login(){
    this.router.navigate(['/login'])
  }
  
  //Muestra o oculta contraseña
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

}
