import { Component,Output,EventEmitter} from '@angular/core';
import {FormControl,FormBuilder, FormGroup,Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/GlobalConstants';
import { UsersService } from 'src/app/service/users.service';
import { SignUpComponent } from '../sign-up/sign-up.component';


import { ILogin } from 'src/app/interface/login';  
import { AuthService } from '../../service/auth.service' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

 
  loginForm :  FormGroup;  
  message: string;  

   
  constructor(private router:Router, 
    private userService: UsersService,  
    private dialogRef: MatDialogRef<LoginComponent>,
    private formBuilder : FormBuilder, 
    private authService : AuthService ){}

    ngOnInit() {  
      this.loginForm = this.formBuilder.group({  
        email_input: ['', Validators.required],  
        password_input: ['', Validators.required]  
      });  
     
      this.authService.logout();  
    }  

    get f() { return this.loginForm.controls; }  
 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;

  loginRam() {  
    console.log('Iam in loginRam button ');
    if (this.loginForm.invalid) {  
      return;  
    }  
    else {  
      console.log('Iam in login Else');

      this.userService.checkLogin(this.loginForm.value).subscribe((result:any)=>{
        console.log('result from service----------->>:', result);   
        if(result[0]!=null){
        if (this.f['email_input'].value == result[0].email && this.f['password_input'].value == result[0].password) {  
          console.log('the result is login succesfull', result);              

          console.log("Login successful");  
          //this.authService.authLogin(this.model);  
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', this.f['email_input'].value);  

          localStorage.setItem('guntur', 'Ram telling about'); 
          // this.router.navigate([this.returnUrl]);
          this.router.navigate(['/home']);
          this.dialogRef.close();  
        }  
        else {  
          this.message = "Please check your userid and password";  
        }  

      }else {  
        this.message = "Please check your userid and password and try again";  
      }  


       
      });
    
    }  
  } 
  
  loginSubmit(){
    console.log('Iam in login submit');
    // this.router.navigate(['/home']);
   
    console.log('Iam in users login', this.loginForm.value);
    console.log('Iam in users login', this.loginForm.value.email_input);
    console.log('Iam in users login', this.loginForm.value.password_input);


    this.userService.checkLogin(this.loginForm.value).subscribe((result:any)=>{
      console.log('the result is login succesfull', result);    
      this.router.navigate(['/home']);
    });


    this.dialogRef.close();
  }
  
}
