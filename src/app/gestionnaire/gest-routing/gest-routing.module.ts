import { NgModule } from '@angular/core';
import {ListeNdfComponent} from '../liste-ndf/liste-ndf.component';
import {HandleNdfComponent} from '../handle-ndf/handle-ndf.component';
import {MenuComponent} from '../menu/menu.component';
import {SearchComponent} from '../search/search.component';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from '../../routing/auth.guard';

const routes:Routes = [
  {path:'gest/:idGest', component: MenuComponent, canActivate: [AuthGuard],
  children: [
    {path:'list', component: ListeNdfComponent, children:[
      {path: ':idNdf', component: HandleNdfComponent }
    ]},
    {path: 'search', component: SearchComponent}
  ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class GestRoutingModule { }
