import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expe: Experience[] = [];

  constructor(private experienceService: ExperienceServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadExperience();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.experienceService.list().subscribe(data => { this.expe = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienceService.delete(id)
        .subscribe(
          {
            next: data => {
              this.loadExperience();
            },
            error: err => {
              alert("No se pudo borrar Experiencia");
            }
          }
        )
    }
  }
}
