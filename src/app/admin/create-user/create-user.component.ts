import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  nom:String;
  typeUser: String;
  listeGest: any[];
  idGest:String;

  constructor(private route:ActivatedRoute, private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this.typeUser = param['type'];
    })
    this.adminService.getListGest().subscribe( l => this.listeGest = l)
  }

  envoyer(){
    if(this.typeUser=='user'){
      if(confirm('Ajouter '+ this.nom + " comme utilisateur ?")){
        this.adminService.addUser({nom:this.nom,idGest:this.idGest}).subscribe(e=>{
          alert("L'utilisateur a bien été créé.");
          this.router.navigate(['/admin'])
        });
      }
    }
    else{
      if(confirm('Ajouter '+ this.nom + " comme gestionnaire ?")){
        this.adminService.addGest({nom:this.nom}).subscribe(e=>{alert("Le gestionnaire a bien été créé.");
        this.router.navigate(['/admin']);
        }) ;
      }
    }
  }
}
