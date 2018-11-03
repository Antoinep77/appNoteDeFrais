import { Injectable } from '@angular/core';
import {Note} from '../note'
import {Observable, Subject} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import {file} from '../note';
import {tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class NdfUsersService {
  constructor(private http : HttpClient) { }

  
  private ndfUrl = ' http://localhost:3000/ndf';

  listNdf: Note[];
  listNdfSub: Subject<Note[]> = new Subject;

  getNdf(idNdf){
    return this.http.get<Note>(this.ndfUrl+'/'+idNdf)
  }

  getUsersNDF(idUser):Observable<Note[]>{
    this.http.get<Note[]>(this.ndfUrl+`/user/${idUser}`).subscribe( l =>{
      this.listNdf = l;
      this.listNdfSub.next(l);
    });
    return this.listNdfSub.asObservable()
  }

  getNdfFile(idNdf){
    return this.http.get<file[]>(this.ndfUrl+'/file/'+idNdf)
  }

  postNewNDF(ndf){
   return this.http.post<Note>(this.ndfUrl,ndf).pipe(
     tap(n =>{
      this.listNdf.push(ndf);
      this.listNdfSub.next(this.listNdf);
     })
   )
  }

  postFile(files:File[],idNdf){
    const formData: FormData = new FormData();
    for(let doc of files){
      formData.append('file', doc, doc.name);
  }
    
    return this.http.post(this.ndfUrl+'/file/'+idNdf, formData)
  }

  deleteNdf(id){
    return this.http.delete(this.ndfUrl + '/' + id).pipe(
      tap(u =>{
        var i = this.listNdf.findIndex(ndf => ndf._id == id);
        this.listNdf.splice(i,1);
        this.listNdfSub.next(this.listNdf);
      })
    )
  }

}
 