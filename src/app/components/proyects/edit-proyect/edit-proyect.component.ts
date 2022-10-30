import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyects } from 'src/app/model/proyects';
import { ProyectsService } from 'src/app/service/proyects.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {

  proy: Proyects = null;
  
  constructor(private proyectsService: ProyectsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectsService.detail(id)
      .subscribe(
        {
          next: data => {
            this.proy = data;
          },
          error: err => {
            alert("Error al editar Proyecto");
            this.router.navigate(['']);
          }
        }
      )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.proy.img = this.proyectsService.url;
    this.proyectsService.update(id, this.proy)
      .subscribe(
        {
          next: data => {
            this.router.navigate(['']);
          },
          error: err => {
            alert("Error al editar Proyecto");
            this.router.navigate(['']);
          }
        }
      )
  }

  uploadImg($event: any) {
    const id = this.activatedRoute.snapshot.params['id'];
    const name = this.proy.name;
    this.proyectsService.uploadImg($event, name)    
  }
}
