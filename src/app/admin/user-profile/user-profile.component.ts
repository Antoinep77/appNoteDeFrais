import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AdminService} from '../admin.service';
import {Note} from '../../note';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:any;
  idUser:String;
  listNdf:Note[];
  listToShow:Note[];
  listGest:any[];
  newIdGest: String;
  userGest: any;

  constructor(private route: ActivatedRoute, private adminService : AdminService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idUser = params['idUser'];
      this.adminService.getUserWIthId(this.idUser).subscribe( u => {
        this.user = u; 
        this.newIdGest = this.user.idGest;

        this.adminService.getListGest().subscribe(l => {
          this.listGest = l;
          this.userGest = l.find((x,i,o) => x._id == this.user.idGest)
        })
      });



      this.adminService.getUserNdf(this.idUser).subscribe(l => {
        this.listNdf = l;

        this.listNdf.sort((a,b)=>{
          if (a.userData.date>b.userData.date){
            return -1
          }
          return 1
        })

        this.listToShow = this.listNdf.slice(0,Math.min(this.listNdf.length,10))
      });
    })
  }

  deleteUser(){
    if(confirm("Êtes-vous sur de vouloir supprimer l'utilisateur "+ this.user.nom)){
      this.adminService.deleteUser(this.idUser).subscribe(e =>  this.router.navigate(['/admin']));
     
    }
  }

  changeIdGest(){
    if(this.user.idGest != this.newIdGest && confirm("Êtes-vous sur de vouloir changer le gestionnaire de " + this.user.nom) ){
      this.user.idGest = this.newIdGest;
      this.adminService.updateUser(this.user).subscribe();
    }
    }
}
