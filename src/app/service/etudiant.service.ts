import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http: HttpClient) {
  }

  allEtudiant() {
    return this.http.get(environment.url + 'etudiant/getall');
  }

  ajoutetudient(data) {
    return this.http.post(environment.url + 'etudiant/save', data);
  }

  modifieretudiant(data, id) {
    return this.http.put(environment.url + 'etudiant/modifier/' + id, data);
  }

  deleteetudiant(id) {
    return this.http.delete(environment.url + 'etudiant/delete/' + id);
  }
}
