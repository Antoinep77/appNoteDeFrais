import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AccueilService {
  private url = ' http://localhost:3000/';
  constructor(private http : HttpClient) { }

  getIdWithName<String>(status:String,name: String){
    return this.http.get<String>(this.url+status+'/find/'+`${name}`)

  }
}
