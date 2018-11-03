import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NdfUsersService } from '../ndf-users.service';
import * as FileSaver from 'file-saver';
import { Note,file } from '../../note';

@Component({
  selector: 'app-show-ndf',
  templateUrl: './show-ndf.component.html',
  styleUrls: ['./show-ndf.component.css']
})
export class ShowNdfComponent implements OnInit {

  idNdf: String;
  ndf: Note;
  files: file[] = [];
  constructor(private route: ActivatedRoute, private userService: NdfUsersService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.idNdf = param['idNdf'];
      this.userService.getNdf(this.idNdf).subscribe(n => {
        this.ndf = <Note>Object.assign(new Note, n);
      })
      this.userService.getNdfFile(this.idNdf).subscribe(l => this.files = l)
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

  delete() {
    if(confirm("Êtes-vous sûr de vouloir supprimer cette demande de note frais")){
    this.ndf.statut = "acceptée";
    this.userService.deleteNdf(this.ndf._id).subscribe(e => alert("La demande a bien étée supprimée"))
    }
  }

}
