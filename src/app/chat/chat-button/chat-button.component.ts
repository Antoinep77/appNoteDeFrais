import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../user'

import {MessageService} from '../message.service';

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
//Chat Access Button
export class ChatButtonComponent implements OnInit {

  flag = false;
  listCorrespondents: User[] = [];
  Counts = {};
  objectKeys = Object.keys;

  constructor(private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.messageService.getListReceivers().subscribe(l=> this.listCorrespondents = l);
    this.messageService.getCountOfMessages().subscribe(l => {
      for(let x of l){
        this.Counts[x._id] = x.number;
      }
    this.messageService.onMessage().subscribe(m =>{ 
      if (this.Counts[m.idSender]){
        this.Counts[m.idSender] += 1;
      }
      else{
        this.Counts[m.idSender] = 1;
      }
    })
    });
    
  }

  openChat(u){
    this.messageService.setReaded(u._id).subscribe();
    delete this.Counts[u._id];
    this.router.navigate(['',{outlets:{chat:[u._id]}}]);
  }

  evalNumber(n){
    if (n== undefined){return 0}
    return n
  }
  onClick(){
    this.flag = !this.flag;
  }

}
