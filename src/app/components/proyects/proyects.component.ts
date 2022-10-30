import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proy: Proyects[] = [];

  constructor(private proyectsService: ProyectsServiceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadProyects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadProyects(): void {
    this.proyectsService.list().subscribe(data => { this.proy = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectsService.delete(id)
        .subscribe(
          {
            next: data => {
              this.loadProyects();
            },
            error: err => {
              alert("No se pudo borrar Proyecto");
            }
          }
        )
    }
  }
}
