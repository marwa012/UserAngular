import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) {
  }

  allEnseignant() {
    return this.http.get(environment.url + 'enseignant/getall');
  }

  ajoutenseignant(data) {
    return this.http.post(environment.url + 'enseignant/save', data);
  }

  modifieenseignantt(data, id) {
    return this.http.put(environment.url + 'enseignant/modifier/' + id, data);
  }

  deleteenseignant(id) {
    return this.http.delete(environment.url + 'enseignant/delete/' + id);
  }
}
