import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  degree: string = '';
  dateEnd : string = '';
  description : string = '';

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Education(this.degree, this.dateEnd, this.description);
    this.educationService.save(expe)
      .subscribe(
        {
          next: data => {
            alert("Educación agregada");
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
