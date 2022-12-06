import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Mycomponent/login/login.component';
import { NavbarComponent } from './Mycomponent/navbar/navbar.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Mycomponent/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HomeComponent } from './Mycomponent/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProviders } from './services/auth.interceptor';
import { AdminDashboardComponent } from './Mycomponent/Admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './Mycomponent/User/user-dashboard/user-dashboard.component';
import { AdminSideNavbarComponent } from './Mycomponent/Admin/admin-side-navbar/admin-side-navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './Mycomponent/profile/profile.component';
import { ChangePasswordComponent } from './Mycomponent/change-password/change-password.component';
import { AllComplaintsComponent } from './Mycomponent/Admin/all-complaints/all-complaints.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { StatesComponent } from './Mycomponent/Admin/states/states.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CategoriesComponent } from './Mycomponent/Admin/categories/categories.component';
import { StatusComponent } from './Mycomponent/Admin/status/status.component';
import { SubCategoryComponent } from './Mycomponent/Admin/sub-category/sub-category.component';
import { AddStateComponent } from './Mycomponent/Admin/add-state/add-state.component';
import { AddCategoryComponent } from './Mycomponent/Admin/add-category/add-category.component';
import { AddStatusComponent } from './Mycomponent/Admin/add-status/add-status.component';
import { UsersComponent } from './Mycomponent/Admin/users/users.component';
import { AddComplaintComponent } from './Mycomponent/User/add-complaint/add-complaint.component';
import { UserSideNavComponent } from './Mycomponent/User/user-side-nav/user-side-nav.component';
import { UserHomeComponent } from './Mycomponent/User/user-home/user-home.component';
import { UserComplaintByPandingComponent } from './Mycomponent/User/user-complaint-by-panding/user-complaint-by-panding.component';
import { UserComplaintByProcessComponent } from './Mycomponent/User/user-complaint-by-process/user-complaint-by-process.component';
import { UserComplaintByCancelComponent } from './Mycomponent/User/user-complaint-by-cancel/user-complaint-by-cancel.component';
import { UserComplaintByClosedComponent } from './Mycomponent/User/user-complaint-by-closed/user-complaint-by-closed.component';
import { ComplaintByNumberComponent } from './Mycomponent/Admin/complaint-by-number/complaint-by-number.component';
import { AddComplaintRemarkComponent } from './Mycomponent/Admin/add-complaint-remark/add-complaint-remark.component';
import { ViewComplaintRemarkComponent } from './Mycomponent/view-complaint-remark/view-complaint-remark.component';
import { UploadProfileImageComponent } from './Mycomponent/upload-profile-image/upload-profile-image.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import { AllSubCategoryComponent } from './Mycomponent/Admin/all-sub-category/all-sub-category.component';
import { EditUserProfileComponent } from './Mycomponent/edit-user-profile/edit-user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminSideNavbarComponent,
    ProfileComponent,
    ChangePasswordComponent,
    AllComplaintsComponent,
    StatesComponent,
    CategoriesComponent,
    StatusComponent,
    SubCategoryComponent,
    AddStateComponent,
    AddCategoryComponent,
    AddStatusComponent,
    UsersComponent,
    AddComplaintComponent,
    UserSideNavComponent,
    UserHomeComponent,
    UserComplaintByPandingComponent,
    UserComplaintByProcessComponent,
    UserComplaintByCancelComponent,
    UserComplaintByClosedComponent,
    ComplaintByNumberComponent,
    AddComplaintRemarkComponent,
    ViewComplaintRemarkComponent,
    UploadProfileImageComponent,
    AllSubCategoryComponent,
    EditUserProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatBadgeModule,
    MatRadioModule
  ],
  providers: [
    AuthInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
