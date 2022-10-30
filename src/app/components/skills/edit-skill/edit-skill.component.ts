import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skills = null;

  constructor(private skillsService: SkillsServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.detail(id)
      .subscribe(
        {
          next: data => {
            this.skill = data;
          },
          error: err => {
            alert("Error al editar Skill");
            this.router.navigate(['']);
          }
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.update(id, this.skill)
      .subscribe(
        {
          next: data => {
            this.router.navigate(['']);
          },
          error: err => {
            alert("Error al editar Skill");
            this.router.navigate(['']);
          }
        }
      )
  }

}
