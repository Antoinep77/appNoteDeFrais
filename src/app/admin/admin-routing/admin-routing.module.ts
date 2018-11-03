import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUserComponent} from '../list-user/list-user.component';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {CreateUserComponent} from '../create-user/create-user.component';


const routes:Routes = [
  {path:'admin', component: null,
  children : [
    {path: 'user/:idUser', component : UserProfileComponent},
    {path: 'add/:type', component: CreateUserComponent},
    {path: '', component: ListUserComponent}
  ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
}) 
export class AdminRoutingModule { }
