import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit {

  proy: Proyects = {
    name: '',
    dateEnd: '',
    link: '',
    description: '',
    img: ''
  }

  constructor(private proyectService: ProyectsServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    //const proy = new Proyects(this.name, this.dateEnd, this.link, this.description, this.img);
    this.proy.img = this.proyectService .url
    this.proyectService.save(this.proy)
      .subscribe(
        {
          next: data => {
            alert("Proyecto agregado");
            this.router.navigate(['']);
          },
          error: err => {
            alert("Fallo");
            this.router.navigate(['']);
          }
        }
      )
  }

  uploadImg($event: any) {
    const name = "proyect_" + this.proy.name;
    this.proyectService.uploadImg($event, name)
  }
}

