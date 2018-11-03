import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  listUser : any[];
  listGest : any[]

  constructor(private adminService : AdminService, private router:Router) { }

  ngOnInit() {
    this.adminService.getListUser().subscribe(l => {
      this.listUser = l;
    })
    this.adminService.getListGest().subscribe(l => {
      this.listGest = l;
    })
  }

}
