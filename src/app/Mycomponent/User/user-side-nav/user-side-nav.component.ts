import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.css']
})
export class UserSideNavComponent implements OnInit {

  name=''
  imageURL:any
  constructor(private loginservice:LoginService,private userService:UserService,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.userService.getCurrentLoginUserDetail(this.loginservice.getUser().username).subscribe(
      (data:any)=>{
        this.name=data.firstname+" "+data.lastname 
        this.loadImage(data.image)
      },
      (error)=>{

      }
    )
  }
  private loadImage(imageName: any) {
    this.userService.downloadDocument(imageName).subscribe(
      (data) => {
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data))
      },
      (error) => {
      })
  }

}
