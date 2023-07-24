import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {


  constructor(private http: HttpClient) {
  }

  allentreprise() {
    return this.http.get(environment.url + 'entreprise/all');
  }

  ajoutentreprise(data) {
    return this.http.post(environment.url + 'entreprise/save', data);
  }

  modifieentreprise(data, id) {
    return this.http.put(environment.url + 'entreprise/modifier/' + id, data);
  }

  deleteentreprise(id) {
    return this.http.delete(environment.url + 'entreprise/delete/' + id);
  }
}
