import {Component, OnInit} from '@angular/core';
import {StageService} from '../service/stage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImageService} from '../service/image.service';

import {Stage} from '../model/stage';
import {EntrepriseService} from '../service/entreprise.service';
import {AuthentificationService} from "../service/authentification.service";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  Listestage;
  stageForm: FormGroup;
  submitted = false;
  rapport;
  filesToUplod: Array<File>;
  listetudiants;
  listentreprise;
  stage1 = new Stage();
  etudient;

  constructor(private stage: StageService, private formbuilder: FormBuilder, private ims: ImageService, private entreprise: EntrepriseService, private authentification: AuthentificationService) {
  }

  ngOnInit() {
    this.getprofile();
    this.getAllstage();
    this.stageForm = this.formbuilder.group({
      theme: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      sujet: ['', [Validators.required]],
      date_debut: ['', [Validators.required]],
      date_fin: ['', Validators.required],
      reference: ['', Validators.required],
      duree: ['', Validators.required],
      note: [''],
      rapport: [''],
      idprop: ['', Validators.required],
    });
  }

  get f() {
    return this.stageForm.controls;
  }

  getAllstage() {
    this.stage.allStage().subscribe(res => {
      console.log(res);
      this.Listestage = res;
    });
  }


  ajoutestage() {
    this.submitted = true;
    // stop here if form is invalid


// display form values on success


    const data = {
      theme: this.stageForm.value.theme,
      description: this.stageForm.value.description,
      type: this.stageForm.value.type,
      sujet: this.stageForm.value.sujet,
      date_debut: this.stageForm.value.date_debut,
      date_fin: this.stageForm.value.date_fin,
      reference: this.stageForm.value.reference,
      duree: this.stageForm.value.duree,
      note: this.stageForm.value.note,
      rapport: this.filesToUplod[0].name,

    };
    console.log(data);

    this.stage.ajoutestage(data,localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.ims.pushFileToStorage(this.filesToUplod[0]).subscribe(res1 => {
        console.log(res1);
        console.log(this.filesToUplod[0].name);
      });
      this.getAllstage();
    });
  }

  recuperFile(file) {
    this.filesToUplod = file.target.files as Array<File>;
    this.rapport = file.target.file[0].name;
  }

  deletestage(id) {
    this.stage.deletestage(id).subscribe(res => {
      console.log(res);
      this.getAllstage();
    });
  }

  getprofile() {
    this.authentification.getprofile().subscribe(res => {
      console.log(res);
      this.etudient = res;
      localStorage.setItem('iduser', this.etudient.id_utilisateur);
    });

  }

  recuper(id, theme, description, type, sujet, date_debut, date_fin, reference, duree, note, rapport) {
    console.log(theme, description, type, sujet, date_debut, date_fin, reference, duree, note, rapport);
    this.stage1.id = id,
      this.stage1.theme = theme,
      this.stage1.description = description,
      this.stage1.type = type,
      this.stage1.sujet = sujet,
      this.stage1.date_debut = date_debut,
      this.stage1.date_fin = date_fin,

      this.stage1.reference = reference,
      this.stage1.duree = duree,
      this.stage1.note = note,
      this.stage1.rapport = rapport;
  }

  modifstage() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.stageForm.invalid) {
      return;
    }

// display form values on success

    console.log(this.stageForm.value);
    const data = {
      nom: this.stageForm.value.nom,
      prenom: this.stageForm.value.prenom,
      tel: this.stageForm.value.tel,
      username: this.stageForm.value.username,
      password: this.stageForm.value.password,
      adresse: this.stageForm.value.adresse,
      email: this.stageForm.value.email,
      specialite: this.stageForm.value.specialite,
      departement: this.stageForm.value.departement,
      photo: this.filesToUplod[0].name
    };
    this.stage.modifierstage(data, this.stage1.id).subscribe(res => {
      console.log(res);
      this.ims.pushFileToStorage(this.filesToUplod[0]).subscribe(res1 => {
        console.log(res1);
        console.log(this.filesToUplod[0].name);
      });
      this.getAllstage();
    });
  }
}
