import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      // Obtener todos los enlaces del Navbar
      const navbarLinks = document.querySelectorAll('#navbar-header .nav-link');
  
      // Agregar un evento de clic a cada enlace
      navbarLinks.forEach((link: HTMLElement) => {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
          // Obtener el atributo "href" del enlace
          const targetId = link.getAttribute('href');
  
          // Obtener el elemento de destino basado en el ID
          const targetElement = document.querySelector(targetId);
  
          // Desplazamiento suave al elemento de destino
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}