import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  jwt: string;
  username: string;
  roles: Array<String>;

  constructor(private http: HttpClient) {

  }

  login(data) {

    return this.http.post(environment.url + 'login', data, {observe: 'response'});

  }

  register(data) {


    return this.http.post(environment.url + 'admin/save', data);

  }

  getprofile() {
    const headers1 = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

    return this.http.get(environment.url + 'admin/getprofile', {headers: headers1});
  }

  parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    localStorage.setItem('role', objJWT.roles);
  }

  saveToken(jwt: string) {
    sessionStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }


  loadToken() {
    this.jwt = sessionStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    sessionStorage.removeItem('token');
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  isenseignant() {
    return this.roles.indexOf('enseignant') >= 0;
  }

}
