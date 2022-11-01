import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  proyURL = environment.URL + 'proyects/';

  //images: string[] = [];
  image: string = "";
  url: string = "";
  constructor(private httpClient: HttpClient, private storage: Storage) { }

  public list(): Observable<Proyects[]>{
    return this.httpClient.get<Proyects[]>(this.proyURL + 'list');
  }

  public detail(id: number): Observable<Proyects>{
    return this.httpClient.get<Proyects>(this.proyURL + `detail/${id}`);
  } 

  public save(proyects: Proyects): Observable<any>{
    return this.httpClient.post<any>(this.proyURL + 'create', proyects);
  }

  public update(id: number, proyects: Proyects): Observable<any>{
    return this.httpClient.put<any>(this.proyURL + `update/${id}`, proyects);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proyURL + `delete/${id}`);
  }

  public uploadImg($event: any, name: string,) {
    
    const img = $event.target.files[0]
    
    const imgRefUp = ref(this.storage, `proyect/` + name)
    
    uploadBytes(imgRefUp, img)
      .then(response => { this.getImages() })
      .catch(error => console.log(error))
  }

  getImages() {
    const imgRefGet = ref(this.storage, `proyect`)

    list(imgRefGet)
      .then(async response => {

        //this.images = [];
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log("La url es: " + this.url);
        //this.images.push(this.url)
      }
    })
    .catch(error => console.log(error))
  }
}
