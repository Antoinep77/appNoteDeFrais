import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../note'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getListUser(){
    return this.http.get<any[]>(this.url+'user')
  }
  getUserWIthId(idUser){
    return this.http.get(this.url+'user/'+idUser)
  }

  getUserNdf(idUser){
    return this.http.get<Note[]>(this.url+'ndf/user/'+idUser)
  }

  deleteUser(idUser){
    return this.http.delete(this.url+'user/'+idUser)
  }
  updateUser(user){
    return this.http.put(this.url+'user/'+user._id,user)
  }
  getListGest(){
    return this.http.get<any[]>(this.url + 'gest')
  }

  addUser(body){
    return this.http.post(this.url+'user',body)
  }

  addGest(body){
    return this.http.post(this.url+'gest',body)
  }

}
