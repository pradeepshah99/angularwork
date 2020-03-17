import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { NodeserviceService } from '../service/nodeservice.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  submitted = false;

  forgetForm : FormGroup;
  

user : any;
 

  constructor( private formBuilder: FormBuilder, 
    private router : Router,
    private myservice : NodeserviceService
    ) { }

  

  ngOnInit() {

    // this.myUser();

    this.loginForm = this.formBuilder.group({

      email: ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(4)]],
     

    


    });
    

    this.forgetForm = this.formBuilder.group({
      emails: ['',[Validators.required, Validators.email]],


    })
    
  }
  // myUser=()=>{
  // this.user = this.myservice.getUser();
  // console.log('this.user', this.user)
  // }

  get emails() {return this.forgetForm.get('emails');}

 get email() {return this.loginForm.get('email')}
 get password() {return this.loginForm.get('password')}
  

 onLogin() {
  console.log(this.loginForm,'test');
  this.submitted=true;
  if(this.loginForm.invalid){
    return;
  } else {
    this.router.navigateByUrl('/dashboard');
  }
}
  
  

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.loginForm.invalid) 
    return;
  else
    this.loginUser();   // Login User call here
}
  
  // onSend(){

  //   if(this.email.invalid){
  //     alert('Enter a valid email')
  //   }
  //   else {
  //     alert('Send an email to ='+JSON.stringify(this.email.value)); 
  //   }

  // }


  onSend() {
    this.submitted = true;

    if(this.forgetForm.invalid)
    {
      alert('Enter a valid email')
    }
    else 
    {
      alert('Send an email to ='+JSON.stringify(this.forgetForm.value)); 
      
      this.forgetForm.reset

    }

  }
  
  //
  loginUser(){
    var email = this.loginForm.value.email;
    var pwd = this.loginForm.value.password;
    var log = {
      email: email,
      password:pwd 
     
    }
    this.myservice.userLogin(log)
        .subscribe(res => {
          if(res.success === true)
          {
            alert(res.message);

            localStorage.setItem('token', res.token);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('password', res.password);

            this.router.navigateByUrl('/dashboard');
          }
          else
          {
            alert(res.message);
          }
        })
 

        
  }



}
