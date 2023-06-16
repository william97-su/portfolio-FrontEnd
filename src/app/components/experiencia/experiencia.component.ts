import { Component, OnInit, Renderer2 } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  tooltipEnabled = false;
  isLoading = true;
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, private renderer: Renderer2) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.renderer.listen('document', 'mouseover', () => {
      this.tooltipEnabled = true;
    });

    this.renderer.listen('document', 'mouseout', () => {
      this.tooltipEnabled = false;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { 
        this.expe = data 
        this.isLoading = false 
      }
    )
  }

  delete(id?: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
      if (id != undefined) {
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err => {
            alert("No se pudo borrar la Experiencia");
          }
        )
      }
    }
  }

}