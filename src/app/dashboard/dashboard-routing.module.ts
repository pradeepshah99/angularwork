import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [

  {path:'', component:DashboardComponent},
  {path: 'users', component:UserListComponent},
  {path: 'products', component:ProductsComponent},
  {path : 'profile', component:ProfileComponent},
  {path : 'users/adduser', component:AdduserComponent},
  {path : 'products/addproduct', component:AddproductComponent},
  {path : 'users/edituser/:id', component:EdituserComponent},
  {path : 'products/editproduct/:id', component:EditproductComponent}
  // {path : 'user-list/edituser/:userId', component:EdituserComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
