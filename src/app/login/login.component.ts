import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;

  constructor(private  router: Router, private formbuilder: FormBuilder, private authservice: AuthentificationService) {
  }

  ngOnInit() {

    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

// display form values on success

    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe(result => {
        const jwt = result.headers.get('Authorization');
        this.authservice.saveToken(jwt);
        console.log(result);
        this.router.navigate(['/home']);
      }
      , error2 => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        });
      });

  }

}
