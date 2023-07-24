import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  etudient;

  constructor(private authentification: AuthentificationService) {
  }

  ngOnInit() {
    this.getprofile();
  }

  getprofile() {
    this.authentification.getprofile().subscribe(res => {
      console.log(res);
      this.etudient = res;
      localStorage.setItem('iduser', this.etudient.id_utilisateur);
    });

  }
}
