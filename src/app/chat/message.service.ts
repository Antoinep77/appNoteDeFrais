import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../message';
import {User} from '../user';
import * as socketIo from 'socket.io-client';
import {HttpClient} from '@angular/common/http';


const SocketServer = 'http://localhost:3001';
const HttpServer = 'http://localhost:3000';
@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor(private http: HttpClient){}
    id: string;
    socket;

    initSocket(id: string): void {
        this.socket = socketIo(SocketServer);
        this.socket.emit('join', id);
        this.id = id;
    }

    sendMessage(content,idReceiver){
        var msg:Message = {
            content: content,
            idSender: this.id,
            idReceiver: idReceiver,
            date: new Date(),
            readed: false
        }
        return this.http.post<Message>(HttpServer+'/message',msg)
    }

    setReaded(idSender){
        return this.http.put(HttpServer+'/message/setReaded/'+this.id+'/'+idSender,{})
    }


    onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    getListReceivers(){
        return this.http.get<any[]>(HttpServer + '/message/correspondents/'+this.id)
    }

    getUser(id){
        return this.http.get<User>(HttpServer + '/user/'+id)
    }

    getMessages(idReceiver){
        return this.http.get<Message[]>(HttpServer + '/message/'+this.id+'/'+idReceiver)
    }

    getCountOfMessages(){
        return this.http.get<any[]>(HttpServer + '/message/count/'+this.id)
    }

}
