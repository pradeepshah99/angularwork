import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NodeserviceService } from 'src/app/service/nodeservice.service';
import { ToastRef, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl:'./edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userData : any;
  userObj: any;
  data : any;

  constructor(private dataservice: DataService, private service: NodeserviceService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

    this.dataservice.currentData.subscribe(res=>{
      this.userData = res
      this.data = this.userData;
    })



  }

  saveUser(){
    var userObj = {
       f_name : this.userData.f_name,
       l_name : this.userData.l_name,
       email: this.userData.email

    }
    this.service.putUser(this.userData._id,userObj).subscribe(res=>{
      this.router.navigateByUrl('/dashboard/users')
      this.toastr.success('User Updated Successfully', 'User Updated')
    })
  }

}
