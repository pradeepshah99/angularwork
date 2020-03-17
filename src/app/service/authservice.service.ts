import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class AuthserviceService implements CanActivate {

  constructor( private router: Router, private toastr: ToastrService) { }

 canActivate() {
   if(localStorage.getItem('isLoggedIn')){
     return true;
   }
   else {

   this.router.navigateByUrl('/login')
this.toastr.error("First login to enter", "Unauthorised Access Denied")
   return false;
   }
 }
}
