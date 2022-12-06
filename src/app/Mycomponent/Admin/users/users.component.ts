import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  tableTitle="All user details !!!"
  msg=''
  table:any
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(
      (data)=>{
       this.table=data
      },
      (error)=>{
        this.msg='service connection problem'
      }
    )
   }
  }
