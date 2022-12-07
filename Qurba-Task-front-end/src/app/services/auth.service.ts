import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

export interface UserLoginBody {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;

  constructor(    private http: HttpClient    ) { }
  getIsLogin() {
    return this.isLogin;
  }
  setIsLogin() {
    this.isLogin = true;
  }
  login(userObject: UserLoginBody): Promise<any> {
    let body: any = {};
    body.username = userObject.username;
    body.password = userObject.password;
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return firstValueFrom(
      this.http.post(
        `https://dummyjson.com/auth/login`,
        body,
        options
      )
    );
  }
}
