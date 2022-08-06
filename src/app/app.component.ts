import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guidesoft';
constructor(public dialog:MatDialog){}

openDialog(){
  this.dialog.open(LoginComponent,{
    width:"20%"
  })
}


opDialog(){
  this.dialog.open(SignUpComponent,{
    width:"30%"
  })
}


}
