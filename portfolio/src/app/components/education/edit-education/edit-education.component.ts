import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  edu: Education = null;

  constructor(private educationService: EducationServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detail(id)
      .subscribe(
        {
          next: data => {
            this.edu = data;
          },
          error: err => {
            alert("Error al editar Educación");
            this.router.navigate(['']);
          }
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.edu)
      .subscribe(
        {
          next: data => {
            this.router.navigate(['']);
          },
          error: err => {
            alert("Error al editar Educación");
            this.router.navigate(['']);
          }
        }
      )
  }

}
