import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  eduURL = environment.URL + 'education/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Education[]>{
    return this.httpClient.get<Education[]>(this.eduURL + 'list');
  }

  public detail(id: number): Observable<Education>{
    return this.httpClient.get<Education>(this.eduURL + `detail/${id}`);
  } 

  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create', education);
  }

  public update(id: number, education: Education): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, education);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
