import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Mycomponent/Admin/add-category/add-category.component';
import { AddComplaintRemarkComponent } from './Mycomponent/Admin/add-complaint-remark/add-complaint-remark.component';
import { AddStateComponent } from './Mycomponent/Admin/add-state/add-state.component';
import { AddStatusComponent } from './Mycomponent/Admin/add-status/add-status.component';
import { AdminDashboardComponent } from './Mycomponent/Admin/admin-dashboard/admin-dashboard.component';
import { AllComplaintsComponent } from './Mycomponent/Admin/all-complaints/all-complaints.component';
import { CategoriesComponent } from './Mycomponent/Admin/categories/categories.component';
import { ComplaintByNumberComponent } from './Mycomponent/Admin/complaint-by-number/complaint-by-number.component';
import { StatesComponent } from './Mycomponent/Admin/states/states.component';
import { StatusComponent } from './Mycomponent/Admin/status/status.component';
import { UsersComponent } from './Mycomponent/Admin/users/users.component';
import { ViewComplaintRemarkComponent } from './Mycomponent/view-complaint-remark/view-complaint-remark.component';
import { ChangePasswordComponent } from './Mycomponent/change-password/change-password.component';
import { HomeComponent } from './Mycomponent/home/home.component';
import { LoginComponent } from './Mycomponent/login/login.component';
import { ProfileComponent } from './Mycomponent/profile/profile.component';
import { RegisterComponent } from './Mycomponent/register/register.component';
import { AddComplaintComponent } from './Mycomponent/User/add-complaint/add-complaint.component';
import { UserComplaintByCancelComponent } from './Mycomponent/User/user-complaint-by-cancel/user-complaint-by-cancel.component';
import { UserComplaintByClosedComponent } from './Mycomponent/User/user-complaint-by-closed/user-complaint-by-closed.component';
import { UserComplaintByPandingComponent } from './Mycomponent/User/user-complaint-by-panding/user-complaint-by-panding.component';
import { UserComplaintByProcessComponent } from './Mycomponent/User/user-complaint-by-process/user-complaint-by-process.component';
import { UserDashboardComponent } from './Mycomponent/User/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './Mycomponent/User/user-home/user-home.component';
import { UploadProfileImageComponent } from './Mycomponent/upload-profile-image/upload-profile-image.component';
import { SubCategoryComponent } from './Mycomponent/Admin/sub-category/sub-category.component';
import { AllSubCategoryComponent } from './Mycomponent/Admin/all-sub-category/all-sub-category.component';
import { EditUserProfileComponent } from './Mycomponent/edit-user-profile/edit-user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: "full"
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    children: [
      {
        path: "",
        component: AllComplaintsComponent,
        pathMatch: "full"
      },
      {
        path: "edit-user-profile",
        component: EditUserProfileComponent,
        pathMatch: "full"
      },
      {
        path: "profile-view/:id",
        component: ProfileComponent,
        pathMatch: "full"
      },
      {
        path: "profile",
        component: ProfileComponent,
        pathMatch: "full"
      }
      ,{
        path: "home",
        component: AllComplaintsComponent,
        pathMatch: "full"
      }
      , {
        path: "change-password",
        component: ChangePasswordComponent,
        pathMatch: "full"
      },
       {
        path: "upload-profile-image",
        component: UploadProfileImageComponent,
        pathMatch: "full"
      },
      {
        path: 'all-complaint',
        component: AllComplaintsComponent,
        pathMatch: 'full'
      },
      {
        path: 'complaint-by-search',
        component: ComplaintByNumberComponent,
        pathMatch: 'full'
      },
      {
        path:'add-complaint-remark/:cid',
        component:AddComplaintRemarkComponent
      },
      {
        path:'edit-complaint-remark/:cid/:rid',
        component:AddComplaintRemarkComponent
      },
      {
        path:'view-complaint-remark/:cid',
        component:ViewComplaintRemarkComponent
      },
      {
        path: 'all-state',
        component: StatesComponent,
        pathMatch: 'full'
      },
      {
        path: 'add-state',
        component: AddStateComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit-state/:id',
        component: AddStateComponent,
      },
      {
        path: 'all-category',
        component: CategoriesComponent,
      },
      {
        path: 'add-sub-category',
        component: SubCategoryComponent,
      },
      {
        path: 'edit-sub-category/:id/:cid',
        component: SubCategoryComponent,
      },
      {
        path: 'all-sub-category/:cid',
        component: AllSubCategoryComponent, 
      },
      
      {
        path: 'add-category',
        component:AddCategoryComponent
      },
      {
        path: 'edit-category/:id',
        component:AddCategoryComponent
      },
      {
        path: 'all-users',
        component:UsersComponent
      },
      {
        path: 'all-status',
        component:StatusComponent
      },
      {
        path: 'add-status',
        component:AddStatusComponent
      },
      {
        path: 'edit-status/:id',
        component:AddStatusComponent
      }
    ]
  },
  {
    path: "user-dashboard",
    component: UserDashboardComponent,
    children:[
      {
        path:'',
        component:UserHomeComponent,
        pathMatch:'full'
      },
      {
        path: "profile",
        component: ProfileComponent,
        pathMatch: "full"
      }
      , {
        path: "home",
        component: UserHomeComponent,
        pathMatch: "full"
      }
      , {
        path: "change-password",
        component: ChangePasswordComponent,
        pathMatch: "full"
      },
      {
        path: "add-complaint",
        component: AddComplaintComponent,
      },
      {
        path: "edit-user-profile",
        component: EditUserProfileComponent,
        pathMatch: "full"
      },
      {
        path: "upload-profile-image",
        component: UploadProfileImageComponent,
        pathMatch: "full"
      },
      {
        path: "edit-complaint/:id",
        component: AddComplaintComponent,
      },
      {
        path: "complaint-by-panding-status",
        component: UserComplaintByPandingComponent
      },
      {
        path: "complaint-by-process-status",
        component: UserComplaintByProcessComponent
      },
      {
        path: "complaint-by-cancel-status",
        component: UserComplaintByCancelComponent
      },
      {
        path: "complaint-by-closed-status",
        component: UserComplaintByClosedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
