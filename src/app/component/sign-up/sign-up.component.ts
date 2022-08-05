import { _isNumberValue } from '@angular/cdk/coercion';
import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Validators, FormControl} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})




export class SignUpComponent implements OnInit {
 users = new FormGroup({
  firstname: new FormControl(''),
  lastname: new FormControl(''),
  email: new FormControl(''),
  password: new FormControl(''),
  confirmpassword: new FormControl(''),
  mobile: new FormControl(''),
  gender: new FormControl(''),
  dateofbirth: new FormControl(''),
 })



  hideRequiredControl = new FormControl(false);


  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
  });

  

  pwForm: FormGroup;
  passwordsMatching:any;
  confirmPasswordClass:any;

  constructor(private fb: FormBuilder, private user: UsersService, private _formBuilder: FormBuilder, private router:Router, private dialogRef: MatDialogRef<SignUpComponent>) {
    this.pwForm = this.fb.group({
      password: '',
      confirmPassword: ''
    });
   }
  
  ngOnInit(): void {
    this.pwForm.controls['confirmPassword'].valueChanges.subscribe((val) => {
      if (this.pwForm.controls['password'].value === val) {
        this.passwordsMatching = true;
        this.confirmPasswordClass = 'form-control is-valid';
      } else {
        this.passwordsMatching = false;
        this.confirmPasswordClass = 'form-control is-invalid'
      }
    })
  
  }

// For email validation
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  // For password validation
  hide = true;

  addUser(){
    // this.router.navigate(['/home']);

    console.log('Iam in add user');
    //  data={
    //   firstname: this.users.firstname,
    //   lastname: this.users.lastname,
    //   email: this.users.email,
    //   password: this.users.password,
    //   confirmpassword: this.users.confirmpassword,
    //   mobile: this.users.mobile,
    //   gender: this.users.gender,
    //   dateofbirth: this.users.dateofbirth
    // };
    this.user.createUser(this.users.value).subscribe((result:any)=>{
      console.log('the result is', result);
    
    });

    this.dialogRef.close();
  }
 
  mobile = new FormControl('', [Validators.required]);
  getError(){
    if (this.mobile.hasError('required')) {
      return 'Enter valid mobile number';
    }
    return this.mobile.hasError('mobile') ? 'Not a valid number' : '';
  }
  }






