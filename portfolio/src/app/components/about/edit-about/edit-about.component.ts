import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  pers: Person = null;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private router: Router, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(id)
      .subscribe(
        {
          next: data => {
            this.pers = data;
          },
          error: err =>{
            alert("Error al editar Persona");
            this.router.navigate(['']);
          }
        }
        
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.pers.img = this.personService.url;
    this.personService.update(id, this.pers)
      .subscribe(
        {
          next: data => {
            this.router.navigate(['']);
          },
          error: err => {
            alert("Error al editar Persona");
            this.router.navigate(['']);
          }
        }
      )
  }

  uploadImg($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "profile_" + id;
    this.personService.uploadImage($event, name)
  }
}
