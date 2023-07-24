import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StageService} from "../service/stage.service";
import {EnseignantService} from "../service/enseignant.service";
import {DemandeService} from "../service/demande.service";
import {environment} from "../../environments/environment";
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  Listestage;
  demandeForm: FormGroup;
  submitted = false;
  listestage;
  listenseignant;
  user;
  listdemande;
  listedemandeetudiant;
  //demande1 = new DemmendEncadrement();
  //stage1 = new Stage();
  role;
  constructor(private stage: StageService, private formbuilder: FormBuilder, private enseignant: EnseignantService, private demande: DemandeService, private authentification: AuthentificationService) {
  }

  ngOnInit() {
    this.getaldemande();
    this.demandebacktudiant();
    this.getAllenseignant();
    this.getAllstage();
    this.demandeForm = this.formbuilder.group({
      idstage: ['', Validators.required],
      idenseigant: ['', Validators.required],
    });
  }

  get f() {
    return this.demandeForm.controls;
  }

  getAllstage() {
    this.stage.allStage().subscribe(res => {
      console.log(res);
      this.Listestage = res;
    });
  }

  getAllenseignant() {
    this.enseignant.allEnseignant().subscribe(res => {
      console.log(res);
      this.listenseignant = res;
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

  ajoudemende() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.demandeForm.invalid) {
      return;
    }
    const data = {};
    console.log(data);
    this.demande.ajoutedemande(data, localStorage.getItem('iduser'), this.demandeForm.value.idenseigant, this.demandeForm.value.idstage).subscribe(res => {
      console.log(res);

      // this.getAllstage();
    });
  }

  getaldemande() {
    this.demande.demandedEncadrementbyensegnat(localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.listdemande = res;
    });
  }

  isenseignant() {
    this.authentification.isenseignant();
  }
  demandebacktudiant(){
    this.demande.demandebacktudiant(localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.listedemandeetudiant = res;
    });
  }
}
