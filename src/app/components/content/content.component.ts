import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  persona: persona = new persona("","","");
  expe: Experiencia[] = [];

  constructor(public personaService: PersonaService, private sExperiencia: SExperienciaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    this.cargarExperiecia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  cargarExperiecia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

}
