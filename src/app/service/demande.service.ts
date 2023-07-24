import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) {
  }

  ajoutedemande(data, idetudiant, idenseigant, idstage) {
    return this.http.post(environment.url + 'demmend/save/' + idetudiant + '/' + idenseigant + '/' + idstage, data);
  }

  demandedEncadrement(idensegnat) {
    return this.http.get(environment.url + 'demmend/allenattent/' + idensegnat);
  }

  demandedEncadrementbyensegnat(idensegnat) {
    return this.http.get(environment.url + 'demmend/alldemande/' + idensegnat);
  }

  oneDemande(id) {
    return this.http.get(environment.url + 'demmend/getone/' + id);
  }

  accepter(iddemmend) {
    return this.http.get(environment.url + 'demmend/accept/' + iddemmend);
  }

  refuser(iddemmend) {
    return this.http.get(environment.url + 'demmend/refuser/' + iddemmend);
  }
  demandebacktudiant(idetudiant){
    return this.http.get(environment.url + 'demmend/alldemandeetudiant/' + idetudiant);
  }
}
