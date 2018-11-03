import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionnaireService } from '../gestionnaire.service';
import * as FileSaver from 'file-saver';
import { Note,file } from '../../note';

@Component({
  selector: 'app-handle-ndf',
  templateUrl: './handle-ndf.component.html',
  styleUrls: ['./handle-ndf.component.css']
})
export class HandleNdfComponent implements OnInit {
  idNdf: String;
  ndf: Note;
  user: any;
  files: file[] = [];
  constructor(private route: ActivatedRoute, private gestService: GestionnaireService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.idNdf = param['idNdf'];
      this.gestService.getNdf(this.idNdf).subscribe(n => {
        this.ndf = <Note>Object.assign(new Note, n);
        this.gestService.getUser(this.ndf.idUser).subscribe(u => this.user = u);
      })
      this.gestService.getNdfFile(this.idNdf).subscribe(l => this.files = l)
    })
  }

  download() {
    console.log(this.files)
    for (let doc of this.files){
      var data = new Uint8Array(doc['data'].data)
      var blob = new Blob([data], { type: doc['contentType'] });
      FileSaver.saveAs(blob, doc['name']);
    }
  }

  accepter() {
    if(confirm("Êtes-vous sûr de vouloir accepter cette note frais")){
    this.ndf.statut = "acceptée";
    this.gestService.updateNdf(this.ndf._id,{statut:this.ndf.statut,gestData: this.ndf.gestData}).subscribe(e => alert("La note de frais a bien étée acceptée"))
    }
  }

  refuser() {
    if(confirm("Êtes-vous sûr de vouloir refuser cette note frais")){
    this.ndf.statut = "refusée";
    this.gestService.updateNdf(this.ndf._id,{statut:this.ndf.statut,gestData: this.ndf.gestData}).subscribe(e => alert("La note de frais a bien étée refusée"))
    }
  }

}
