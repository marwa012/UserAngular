import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationService} from "../service/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  registerForm: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder, private authservice: AuthentificationService) {
  }

  ngOnInit() {

    this.registerForm = this.formbuilder.group({

      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      tel: ['', Validators.required],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      adresse: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      fax: ['', Validators.required]

    });

  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

// display form values on success

    console.log(this.registerForm.value);
    this.authservice.register(this.registerForm.value).subscribe(result => {

      console.log(result);
      this.router.navigate(['']);

    });

  }

}
