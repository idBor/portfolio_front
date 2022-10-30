import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  expLab: Experience = null;

  constructor(private experienceService: ExperienceServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id)
      .subscribe(
        {
          next: data => {
            this.expLab = data;
          },
          error: err =>{
            
          }
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.expLab)
      .subscribe(
        {
          next: data => {
            this.router.navigate(['']);
          },
          error: err => {
            alert("Error al editar Experiencia");
            this.router.navigate(['']);
          }
        }
      )
  }

}
