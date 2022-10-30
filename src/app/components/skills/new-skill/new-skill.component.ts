import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  name: string;
  percentage: number;

  constructor(private skillsService: SkillsServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skills(this.name, this.percentage);
    this.skillsService.save(skill)
      .subscribe(
        {
          next: data => {
            alert("Skill agregada!");
            this.router.navigate(['']);
          },
          error: err => {
            alert("Falla!");
            this.router.navigate(['']);
          }
        }
      )
  }

}