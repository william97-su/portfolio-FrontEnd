import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private skills: SSkillService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Captura el id de la skill
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    // Captura el id de la skill
    const id = this.activatedRouter.snapshot.params['id'];
    this.skills.update(id, this.skill).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }
  
}
