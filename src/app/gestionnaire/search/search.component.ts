import { Component, OnInit } from '@angular/core';
import {Note} from '../../note';
import {ActivatedRoute} from '@angular/router';
import {GestionnaireService} from '../gestionnaire.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nom: string;
  intitule:string;
  dateBefore: Date;
  dateAfter: Date;

  idGest : String;
  listeNdf : Note[];
  constructor(private route: ActivatedRoute, private gestService: GestionnaireService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(p => {
      this.idGest = p['idGest'];
      this.gestService.getSearch(this.idGest,{}).subscribe(l=>{
        this.listeNdf = l
      })
    })
  }

  onKeyboard(){
    var query = {nom:this.nom,intitule:this.intitule,dateAfter:this.dateAfter,dateBefore:this.dateBefore};
    this.gestService.getSearch(this.idGest, query)
    .subscribe(l => this.listeNdf = l);
  }

}
