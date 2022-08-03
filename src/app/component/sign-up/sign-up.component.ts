import { Component, OnInit } from '@angular/core';
import {Validators, FormControl} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})




export class SignUpComponent implements OnInit {
  hideRequiredControl = new FormControl(false);


  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
  });

  

  pwForm: FormGroup;
  passwordsMatching:any;
  confirmPasswordClass:any;

  constructor(private fb: FormBuilder,private _formBuilder: FormBuilder, private router:Router, private dialogRef: MatDialogRef<SignUpComponent>) {
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

  back(){
    this.router.navigate(['/home']);
    this.dialogRef.close();
  }
 


  }






