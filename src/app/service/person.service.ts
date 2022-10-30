import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = environment.URL + 'persons/';

  //images: string[];
  url: string = "";

  constructor(private httpClient: HttpClient, private storage: Storage) {
    //this.images = [];
   }

  public list(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Person>{
    return this.httpClient.get<Person>(this.URL + `detail/${id}`);
  } 

  /*public save(person: Person): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', person);
  }*/

  public update(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, person);
  }

  uploadImage($event: any, name: string) {

    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `about/` + name);

    uploadBytes(imgRef, file)
      .then(response => { this.getImages(); })
      .catch(error => console.log(error));
    
  }

  getImages() {
    const imgRefGet = ref(this.storage, `about`);

    list(imgRefGet)
      .then(async response => {
        
        //this.images = [];
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log(this.url)
          //this.images.push(url);
        }
      })
    .catch(error => console.log(error));
  }
  
  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}
