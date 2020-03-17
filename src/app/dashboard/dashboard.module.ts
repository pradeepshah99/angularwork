import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DataTablesModule } from 'angular-datatables';
import { EdituserComponent } from './edituser/edituser.component';
import { EditproductComponent } from './editproduct/editproduct.component';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, FooterComponent, UserListComponent, ProductsComponent, ProfileComponent, AdduserComponent, AddproductComponent, EdituserComponent, EditproductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule, ReactiveFormsModule,
    DataTablesModule
  ]
})
export class DashboardModule { }
