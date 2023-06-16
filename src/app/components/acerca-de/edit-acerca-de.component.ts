import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  imageLoading: boolean = false;
  persona: persona = null;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {

    // Captura el id de Persona 
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al capturar Persona");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate():void {

    // Captura el id de persona
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        console.error(err.message);
        alert(err.message);
        this.router.navigate(['']);
      }
    )

  }

 // uploadImage($event: any){
 //   const id = this.activatedRouter.snapshot.params['id'];
 //   const name = "perfil_"+ id;
 //   this.imageService.uploadImage($event, name)
 // }
 uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);

    this.imageLoading = true; // Habilitar el spinner

    const reader = new FileReader();
    reader.onload = () => {
      this.imageService.url = reader.result as string;
      this.imageLoading = false; // Deshabilitar el spinner
    };
    reader.readAsDataURL($event.target.files[0]);
  }

}
