import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../service/demande.service";
import {AuthentificationService} from "../../service/authentification.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listdemande;
  user;
  listedemandeetudiant;
  role;

  constructor(private demande: DemandeService, private authentification: AuthentificationService) {
  }

  ngOnInit() {
    this.getprofile();
    this.demandebacktudiant();
    this.getalldemandenonvalide();
  }

  getalldemandenonvalide() {
    this.demande.demandedEncadrement(localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.listdemande = res;
    });
  }

  demandebacktudiant() {
    this.demande.demandebacktudiant(localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.listedemandeetudiant = res;
    });
  }

  getprofile() {
    this.authentification.getprofile().subscribe(res => {
      console.log(res);
      this.user = res;
      localStorage.setItem('iduser', this.user.id_utilisateur);
      this.role = localStorage.getItem('role');

    });

  }
}
