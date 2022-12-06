import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private login:LoginService,private userservice:UserService,private sanitizer:DomSanitizer,private _router:ActivatedRoute) { }

  table:any
  id:number | undefined
  service:any
  imageUrl:any
  ngOnInit(): void {
   this.id=parseInt(this._router.snapshot.params['id']);
   if(this.id>0){
     this.userservice.getUserById(this.id).subscribe(
      (data:any)=>{
            this.table=data
            if(this.table.image==''||this.table.image==null)
             this.imageUrl="../../../assets/logo.jpg"
             else
            this.loadImage(this.table.image) 
      },
      (error)=>{   
      }
      )
    }else{
      this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe(
        (data:any)=>{
          this.table=data
          this.loadImage(this.table.image)
        },
        (error)=>{  }
      )
    }
  }
  public loadImage(imageName: any) {
    this.userservice.downloadDocument(imageName).subscribe(
      (data) => {
        this.imageUrl= this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data))
      },
      (error) => {
       // this.imageUrl="src/assets/logo.jpg"
      })
  }

}
