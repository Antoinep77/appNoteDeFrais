import { Component, OnInit } from '@angular/core';
import { NdfUsersService } from '../ndf-users.service'
import { Note } from '../../note'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ndf-list-users',
  templateUrl: './ndf-list-users.component.html',
  styleUrls: ['./ndf-list-users.component.css']
})
export class NdfListUsersComponent implements OnInit {
  idUser: String;
  listeNdf: Note[] = [];


  constructor(private ndfService: NdfUsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.idUser = params['idUser'];
      this.ndfService.getUsersNDF(this.idUser).subscribe(l => {
        this.listeNdf = l
      }

      )
    })

  }

}
