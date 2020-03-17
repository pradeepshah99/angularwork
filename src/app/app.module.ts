import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import { CarosoulComponent } from './carosoul/carosoul.component';
import { WelcomemultusComponent } from './welcomemultus/welcomemultus.component';
import { OurbenefitCompComponent } from './ourbenefit-comp/ourbenefit-comp.component';
import { OurprocessCompComponent } from './ourprocess-comp/ourprocess-comp.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';








@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    FooterCompComponent,
    CarosoulComponent,
    WelcomemultusComponent,
    OurbenefitCompComponent,
    OurprocessCompComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
  CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut:1000, positionClass:'toast-top-center', preventDuplicates:true})
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
