import { Component, OnInit } from '@angular/core';
import { Note } from '../../note';
import { NdfUsersService } from '../ndf-users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nouvelle-ndf',
  templateUrl: './nouvelle-ndf.component.html',
  styleUrls: ['./nouvelle-ndf.component.css']
})
export class NouvelleNdFComponent implements OnInit {
  idUser: String;
  listDevise = ['EUR', 'USD'];
  n: Note = new Note();
  files: File[] = null;

  constructor(private ndfService: NdfUsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.idUser = params['idUser'];
      this.n.idUser = this.idUser
    })

  }

  envoyerDemande() {
    if (confirm("Souhaitez-vous soumettre cette note de frais")) {
      this.ndfService.postNewNDF(this.n).subscribe(ndf => {
        if (this.files != null) {
          this.ndfService.postFile(this.files, ndf._id).subscribe(e => {
            this.router.navigate(['/user/list', this.idUser]);
            alert("La soumission a bien été effectuée.");
          })
        }
        else {
          this.router.navigate(['user',this.idUser,'list']);
          alert("La soumission a bien été effectuée.");
        }
      })
    }
  }

  changementFichier(files) {
    this.files = files;
    console.log(this.files)
  }

}
