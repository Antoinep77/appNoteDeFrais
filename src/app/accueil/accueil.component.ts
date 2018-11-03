import { Component, OnInit } from '@angular/core';
import {AccueilService} from './accueil.service'
import {Router} from '@angular/router';
import {MessageService} from '../chat/message.service';
import { AuthService } from '../routing/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  username: string;
  typeUser: string = "user";
  constructor(private accueilService: AccueilService,private router: Router, 
    private messageService: MessageService, private authService: AuthService) { }

  ngOnInit() {
  }

  valider(){
    if (this.typeUser == 'admin'){
      this.router.navigate(['/admin'])
    }
    else{
    this.accueilService.getIdWithName(this.typeUser,this.username).subscribe(id=>{
      this.messageService.initSocket(id);
      this.authService.log(id);
      this.router.navigate(['/'+this.typeUser+'/'+id+'/list']);

    }
    
    )}
    
  }
}
