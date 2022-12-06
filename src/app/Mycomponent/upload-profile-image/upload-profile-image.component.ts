import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-profile-image',
  templateUrl: './upload-profile-image.component.html',
  styleUrls: ['./upload-profile-image.component.css']
})
export class UploadProfileImageComponent implements OnInit {

  uploadForm:any;  
  constructor(private formBuilder: FormBuilder,private userService:UserService,private login:LoginService,
    private snack:MatSnackBar) {  }
  ngOnInit() { 
    this.uploadForm = this.formBuilder.group({
      image: ['']
    });
   }
   onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('image').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.uploadForm.get('image').value);
    this.userService.getCurrentLoginUserDetail(this.login.getUser().username).subscribe((data:any)=>{
      this.userService.upload(formData,data.id).subscribe(
        (data)=>{
          this.snack.open("Image Upload Successfully !!!","ok",{duration:2000,verticalPosition:"bottom"})
          window.location.reload();
        },
        (error)=>{
          console.log(error)
        }
        )
      },(error)=>{  })
      }
}
