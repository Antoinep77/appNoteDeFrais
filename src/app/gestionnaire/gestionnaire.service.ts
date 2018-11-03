import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note, file} from '../note';
import { Subject } from 'rxjs';
import {tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {
  private url = 'http://localhost:3000';

  listNDfSub: Subject<Note[]>= new Subject();
  listNdf: Note[];
  constructor(private http:HttpClient) { };

  getListNdfATraiter(idGest:String){
    this.http.get<Note[]>(this.url+'/gest/listNdf/'+idGest).subscribe( l =>{
      this.listNdf = l;
      this.listNDfSub.next(l);
    });
    return this.listNDfSub.asObservable()
  }

  getNdf(idNdf){
    return this.http.get<Note>(this.url+'/ndf/'+idNdf)
  }
  getNdfFile(idNdf){
    return this.http.get<file[]>(this.url+'/ndf/file/'+idNdf)
  }
  getUser(idUser){
    return this.http.get(this.url+'/user/'+idUser)
  }
  updateNdf(idNdf,propToUpdate){
    return this.http.put(this.url+'/ndf/'+idNdf,propToUpdate).pipe(
      tap(u =>{
        var i = this.listNdf.findIndex(ndf => ndf._id == idNdf);
        for(let prop of Object.keys(propToUpdate)){
          this.listNdf[i][prop] = propToUpdate[prop];
        }
        this.listNDfSub.next(this.listNdf);
      })
    )
  }

  getSearch(idGest,query){
    return this.http.post<Note[]>(this.url+'/search/'+idGest,query)
  }

}
