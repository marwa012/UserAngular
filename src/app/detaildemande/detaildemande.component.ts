import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DemandeService} from "../service/demande.service";
import {StageService} from "../service/stage.service";
import {EnseignantService} from "../service/enseignant.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detaildemande',
  templateUrl: './detaildemande.component.html',
  styleUrls: ['./detaildemande.component.css']
})
export class DetaildemandeComponent implements OnInit {
  iddemande;
  demande;
  listdemande
  Listestage;
  listestage;
  listenseignant;

  constructor(private router:Router, private activaterout: ActivatedRoute, private demandeservice: DemandeService, private stage: StageService,  private enseignant: EnseignantService) {
    this.iddemande = this.activaterout.params['_value']['id'];
  }
  ngOnInit() {
    this.getone(this.iddemande);
  }
  getone(id) {
    this.demandeservice.oneDemande(id).subscribe(res => {
      console.log(res);
      this.demande = res;
    });
  }
  getaldemande() {
    this.demande.demandedEncadrementbyensegnat(localStorage.getItem('iduser')).subscribe(res => {
      console.log(res);
      this.listdemande = res;
    });
  }
  getAllstage() {
    this.stage.allStage().subscribe(res => {
      console.log(res);
      this.Listestage = res;
    });
  }
  refuser(iddemmend) {
    this.demandeservice.refuser(iddemmend).subscribe(res => {
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'vous étes refuser cette demande',
        showConfirmButton: false,
        timer: 1000
      });
      this.router.navigate(['/home/demande']);
    });
  }
  accepter(iddemmend) {
    this.demandeservice.accepter(iddemmend).subscribe(res => {
      console.log(res);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'vous étes accepter cette demande',
        showConfirmButton: false,
        timer: 1000
      });
      this.router.navigate(['/home/demande']);
    });
  }

  getAllenseignant() {
    this.enseignant.allEnseignant().subscribe(res => {
      console.log(res);
      this.listenseignant = res;
    });
  }

}
