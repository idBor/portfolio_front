import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  nameExp: string = '';
  dateStart_exp : string = '';
  dateEnd_exp : string = '';
  description_exp : string = '';
  //img_exp: any = [];

  //public preview!: string;
  
  constructor(private experienceService: ExperienceServiceService, private router: Router/*, private sanitizer: DomSanitizer*/) { }

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
    const expe = new Experience(this.nameExp, this.dateStart_exp, this.dateEnd_exp, this.description_exp/*, this.img_exp*/);
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
