import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Note} from '../../note'
import {GestionnaireService} from '../gestionnaire.service'

@Component({
  selector: 'app-liste-ndf',
  templateUrl: './liste-ndf.component.html',
  styleUrls: ['./liste-ndf.component.css']
})
export class ListeNdfComponent implements OnInit {
  
  idGest : String;
  listeNdf : Note[];
  constructor(private route: ActivatedRoute, private gestService: GestionnaireService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(p => {
      this.idGest = p['idGest'];
      this.gestService.getListNdfATraiter(this.idGest).subscribe(l=>{
        this.listeNdf = l
      })
      


    })
  }

}
