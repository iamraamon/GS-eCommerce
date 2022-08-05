import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private router:Router, private users:SignUpComponent, private dialogRef: MatDialogRef<LoginComponent>){}


 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;
  
  login(){
    console.log('Iam in login page');
    // this.router.navigate(['/home']);
    this.users.value;
    console.log('Iam in users login');
    this.dialogRef.close();
  }
  
}
