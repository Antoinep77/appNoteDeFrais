import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UtilisateurComponent} from '../utilisateur.component';
import {NdfListUsersComponent} from '../ndf-list-users/ndf-list-users.component';
import {NouvelleNdFComponent} from '../nouvelle-ndf/nouvelle-ndf.component';
import {AuthGuard} from '../../routing/auth.guard';
import {ShowNdfComponent} from '../show-ndf/show-ndf.component';

const routes: Routes = [
  {path: 'user/:idUser', component: UtilisateurComponent, canActivate:[AuthGuard],
  children: [
    {path:'list',component : NdfListUsersComponent, children:[
        {path:':idNdf', component: ShowNdfComponent}
      ]
    },
    {path:'newNdF',component : NouvelleNdFComponent},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UserRoutingModule { }
