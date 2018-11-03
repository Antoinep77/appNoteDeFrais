import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChatComponent} from '../chat/chat.component';
import {ChatButtonComponent} from '../chat-button/chat-button.component';
import { CommonModule } from "@angular/common";


const routes: Routes = [
  {path: ':idCorrespondent', component: ChatComponent , outlet : "chat"  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
  ],
  exports: [
    RouterModule,
  ]
})
export class RoutingModule { }
