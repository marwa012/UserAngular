import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "./service/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthentificationService) {
  }

  ngOnInit() {
    this.auth.loadToken();
  }

  title = 'stageetu';
}
