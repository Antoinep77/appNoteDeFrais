import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MessageService} from '../message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap, filter} from 'rxjs/operators';
import {Message} from '../../message';
import {User} from '../../user';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('box', { read: ElementRef }) public box: ElementRef<any>;
  listMessage:Message[];
  Correspondent : User;
  writenContent: string;
  constructor(private messageService: MessageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(param => {
        return this.messageService.getUser(param['idCorrespondent']);
      }),
      switchMap(u =>{
        this.Correspondent = u;
        return this.messageService.getMessages(u._id);
      } )
    ).subscribe( l => {
      this.listMessage = l;
    })
    this.messageService.onMessage().pipe(filter(m =>{console.log(m); return m.idSender == this.Correspondent._id}))
    .subscribe(m => {
      this.listMessage.push(m);
    });
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  close(){
    this.router.navigate(['',{outlets:{chat:null}}]);
  }

  send(){
    if(this.writenContent != ""){
      this.messageService.sendMessage(this.writenContent, this.Correspondent._id).subscribe(m => {
        this.listMessage.push(m);
      })
      this.writenContent ="";
    }
  }

  scrollToBottom(): void {
    this.box.nativeElement.scrollTop = this.box.nativeElement.scrollHeight;               
  }

}
