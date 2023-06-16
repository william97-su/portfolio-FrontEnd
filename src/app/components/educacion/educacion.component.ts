import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  isLoading = true;
  educacion: Educacion[] = [];

  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => {
         this.educacion = data
         this.isLoading = false 
        }
    )
  }

  delete(id?: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
      if (id != undefined) {
        this.sEducacion.delete(id).subscribe(
          data => {
            this.cargarEducacion();
          }, err => {
            alert("No se pudo borrar la Educacion");
          }
        )
      }
    }
    
  }

}
