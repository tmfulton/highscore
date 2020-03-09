import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    verifyPassword: new FormControl(''),
    userName: new FormControl('')
  });

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";

      let snackBarRef = this.snackBar.open("Your account has been created", '', {
        duration: 3000,
        panelClass: ['green-snackBar']
      });
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      let snackBarRef = this.snackBar.open('Succesfully logged In', '', {
        duration: 3000,
        panelClass: ['green-snackBar']
      });
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

  checkSignUp(value){
    if (value.password == value.verifyPassword)
    {
      return true;
    }
  }

}
