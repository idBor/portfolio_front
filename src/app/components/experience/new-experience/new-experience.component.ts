import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  name: string = '';
  dateStart : string = '';
  dateEnd : string = '';
  description : string = '';

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experience(this.name, this.dateStart, this.dateEnd, this.description);
    this.experienceService.save(expe)
      .subscribe(
        {
          next: data => {
            alert("Experiencia agregada");
            this.router.navigate(['']);
          },
          error: err => {
            alert("Fallo");
            this.router.navigate(['']);
          }
        }
      )
  }
}
