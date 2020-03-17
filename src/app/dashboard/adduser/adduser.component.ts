import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NodeserviceService } from 'src/app/service/nodeservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  // adduserForm : FormGroup;
  submitted = false;

  adduserForm = this.formBuilder.group({

    firstName : ['', Validators.required],
    lastName : ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]]

  });



  constructor( private formBuilder:FormBuilder, private router: Router, private service: NodeserviceService, private toastr: ToastrService) { }

  ngOnInit() {

    
  }

  get firstName() {return this.adduserForm.get('firstName')};
  get lastName() {return this.adduserForm.get('lastName')};
  get email() {return this.adduserForm.get('email')};
  get password() {return this.adduserForm.get('password')};
  //  get dta() {return this.adduserForm.controls;}

   onSubmit(){
     console.log(this.adduserForm, "test");
     this.submitted = true;

     if(this.adduserForm.invalid)
     {
      this.adduserForm.get('firstName').markAllAsTouched();

      this.adduserForm.get('lastName').markAllAsTouched();

      this.adduserForm.get('email').markAllAsTouched();
      this.adduserForm.get('password').markAllAsTouched();

     }
     else {
      this.service.userRegister({
        f_name:this.adduserForm.value.firstName,
        l_name:this.adduserForm.value.lastName,
        email: this.adduserForm.value.email,
        password:this.adduserForm.value.password
      }).subscribe((res)=>
      {

      })
      this.toastr.success('Hello world!', 'Toastr fun!');
      this.router.navigateByUrl('/dashboard/users');
     }
    //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adduserForm.value))
   }

}
