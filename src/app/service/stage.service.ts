import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) {
  }

  oneStage(id) {
    return this.http.get(environment.url + 'stage/getone/' + id);
  }

  allStage() {
    return this.http.get(environment.url + 'stage/getall');
  }

  ajoutestage(data, idprop) {
    return this.http.post(environment.url + 'stage/save/' + idprop, data, {observe: 'response'});
  }

  deletestage(id) {
    return this.http.delete(environment.url + 'stage/delete/' + id);
  }

  modifierstage(data, id) {
    return this.http.put(environment.url + 'stage/modifier/' + id, data);
  }

  effectuer(idetudient, idstage) {
    return this.http.get(environment.url + 'stage/effectierstage/' + idetudient + '/' + idstage);
  }

  getetudiantbystage(idstage) {
    return this.http.get(environment.url + 'stage/getetudiantbystage/' + idstage);
  }
  ajoutfavorie(idstage, idetudiant) {
    return this.http.get(environment.url + 'stage/ajoutfavorie/' + idstage + '/' + idetudiant);
  }

}
