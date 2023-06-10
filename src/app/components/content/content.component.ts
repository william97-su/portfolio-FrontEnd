import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }


}
