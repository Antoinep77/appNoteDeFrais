import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private loggedInID : string; //ID of loggedIn user

  log(id){
    this.loggedInID = id;
  }

  verify(id){
    return id == this.loggedInID;
  }

  logout(){
    this.loggedInID = undefined;
  }

}
