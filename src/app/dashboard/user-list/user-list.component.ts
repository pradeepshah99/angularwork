import { Component, OnInit } from '@angular/core';
import {NodeserviceService} from '../../service/nodeservice.service';
import { ToastrService } from 'ngx-toastr';
import { ok } from 'assert';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service:  NodeserviceService,
     private toastr: ToastrService,
      private router:Router,
      private dataservice : DataService
      ) 
      { }

  data:any;
  

  ngOnInit() {
    
    this.service.getallUser().subscribe((res)=> {console.log(res)
    this.data = res.data

  })
  this.toastr.success('All User Fetched', 'Successfully');
  
  

  }
  ondeleteUser(id){
    console.log(id)
    if(window.confirm('Are you sure?') === true)
    {
      this.service.deleteUser(id).subscribe((res)=>
    {
      this.service.getallUser().subscribe((res)=> {console.log(res)
        this.data = res.data
      })
      this.toastr.success('User Deleted', 'Successfully');
    })
    }
    else {
      return;
    }
    
  

  }


  // editUser(userObj){


  //   var userData = 
  //   {
  //     _id: userObj._id,
  //     f_name: userObj.f_name,
  //     l_name: userObj.l_name,
  //     email: userObj.email,

  //   }
  //   this.dataservice.changeData(userData);
  //   this.router.navigateByUrl('/dashboard/users/edituser/'+userData._id)
   
  //   console.log(userData);
    
    

  // }


  editUser(userObject){
    var userData = {
      _id: userObject._id,
      f_name: userObject.f_name,
      l_name: userObject.l_name,
      email: userObject.email
    }
    this.dataservice.changeData(userData)
console.log(userData._id)
    this.router.navigateByUrl('/dashboard/users/edituser/'+userData._id)
  }
  

}
