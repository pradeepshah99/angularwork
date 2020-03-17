import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NodeserviceService } from 'src/app/service/nodeservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  // addproductForm : FormGroup;
  submitted = false;
  addproductForm = this.formBuilder.group({

    pName : ['', Validators.required],
    pDesc : ['', Validators.required],
    pImage: ['', Validators.required],
    reviews: ['', Validators.required]

  })

  constructor(private formBuilder:FormBuilder, private router: Router, private service : NodeserviceService, private toastr : ToastrService) { }

  get pName() {return this.addproductForm.get('pName')}
  get pDesc() {return this.addproductForm.get('pDesc')}
  get pImage() {return this.addproductForm.get('pImage')}

  get reviews() {return this.addproductForm.get('reviews')}







  ngOnInit() {

    
  }




  // get pdta() {return this.addproductForm.controls;}

  onSubmit(){
    console.log(this.addproductForm, "test");
    this.submitted = true;

    if(this.addproductForm.invalid)
    {
      return;
    }
    else {

      this.service.addProduct({
     p_name: this.addproductForm.value.pName,
     p_desc: this.addproductForm.value.pDesc,
     p_image: this.addproductForm.value.pImage,
     reviews: this.addproductForm.value.reviews


      }).subscribe((res)=>{})
      this.toastr.success('Added Product', 'Toastr fun!');
     this.router.navigateByUrl('/dashboard/products');
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.addproductForm.value))
  }

}
