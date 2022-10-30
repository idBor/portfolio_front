import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jwtdto } from '../model/jwtdto';
import { NewUser } from '../model/new-user';
import { UserLogin } from '../model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.URL + 'auth/';
  
  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser);
  }

  public login(userLogin: UserLogin): Observable<Jwtdto>{
    return this.httpClient.post<Jwtdto>(this.authURL + 'login', userLogin);
  }
}
