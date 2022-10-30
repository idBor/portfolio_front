import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  degreeEdu: string = '';
  dateEnd_edu : string = '';
  description_edu : string = '';
  //img_edu: any = [];

  //public preview!: string;

  constructor(private educationService: EducationServiceService, private router: Router/*, private sanitizer: DomSanitizer*/) { }

  ngOnInit(): void {
  }

  /*
  captureFile(event: any): any {
    const captureFile = event.target.files[0]
    this.extractBase64(captureFile).then((imagen: any) => {
      this.preview = imagen.base;
      console.log(imagen);
    })
    this.img_exp.push(captureFile)
  }
  */

  onCreate(): void{
    const expe = new Education(this.degreeEdu, this.dateEnd_edu, this.description_edu/*, this.img_exp*/);
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
  
  /*
  extractBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return $event;
    }
  })
  */

}
