import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  public createUser(inputData:any){
    console.log('Iam creating user');
    return this.http.post("http://localhost:3000/users/", inputData);
  }



}
