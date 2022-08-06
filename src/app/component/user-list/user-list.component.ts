import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/model/users.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList : any

  constructor(private userService:UsersService) { }

  ngOnInit(): void {

    console.log("Iam in goninti userlist");
    this.userService.getAllUsers().subscribe( result => {
      console.log("result---",result);
      this.userList = result;
    });
  }

}
