import { Component,Inject ,OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { GlobalConstants } from './GlobalConstants';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'guidesoft';
  loggedInEmail : any;

  id: string;  

  guntur_value:string;


  logout() {  
    console.log('logout');  
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('guntur');

   // this.authService.logout();  
    this.openDialog();  
  } 

constructor(public dialog:MatDialog,private router: Router, private authService: AuthService){}
 
ngOnInit(): void {
    this.id = localStorage.getItem('token');  
    this.guntur_value=  localStorage.getItem('guntur');  
  }

openDialog(){
  this.dialog.open(LoginComponent,{
    width:"20%"
  })
  this.ngOnInit();
}


opDialog(){
  this.dialog.open(SignUpComponent,{
    width:"30%"
  })
}


}
