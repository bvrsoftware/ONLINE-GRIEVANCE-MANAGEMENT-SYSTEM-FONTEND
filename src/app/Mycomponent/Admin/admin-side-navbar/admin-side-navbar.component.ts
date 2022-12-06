import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-side-navbar',
  templateUrl: './admin-side-navbar.component.html',
  styleUrls: ['./admin-side-navbar.component.css']
})
export class AdminSideNavbarComponent implements OnInit {

  name = ''

  constructor(private login: LoginService, private userservice: UserService, private sanitizer: DomSanitizer) { }
  imageURL: any
  ngOnInit(): void {

    this.userservice.getCurrentLoginUserDetail(this.login.getUser().username).subscribe(
      (data: any) => {
        this.name = data.firstname + " " + data.lastname
        this.loadImage(data.image);
      },
      (error) => {

      }
    )
  }

  private loadImage(imageName: any) {
    this.userservice.downloadDocument(imageName).subscribe(
      (data) => {
        this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data))
      },
      (error) => {
      })
  }
}
