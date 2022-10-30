import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skills[] = [];

  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false
    }
  }

  loadSkills(): void{
    this.skillsService.list()
      .subscribe(
        {
          next: data => {
            this.skill = data;
          },
        }
      )
  }

  delete(id: number) {
    if (id != undefined) {
      this.skillsService.delete(id)
        .subscribe(
          {
            next: data => {
              this.loadSkills();
            },
            error: err => {
              alert("No se pudo eliminar Skill");
            }
          }
        )
    }
  }

}
