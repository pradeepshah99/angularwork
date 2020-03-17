import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { NodeserviceService } from 'src/app/service/nodeservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productData : any;
  productObj: any;
  data : any;

  constructor(
    private dataservice : DataService,
    private service : NodeserviceService,
    private toastr : ToastrService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.dataservice.currentData.subscribe(res=>{
      this.productData = res
      this.data = this.productData;
    })

    
  }

  // updateProduct(){
  //   var productObj = {
  //     p_name : this.productData.p_name,
  //     p_desc : this.productData.p_desc,
  //     p_image : this.productData.p_image,
  //     reviews : this.productData.reviews
  //   }
  //   this.service.putProduct(this.productData._id, productObj).subscribe(res=>
  //     {
  //       this.router.navigateByUrl('/dashboard/products')
  //       this.toastr.success('Product Updated Successfully', 'Product Updated')
  //     })
  // }




  updateProduct(){
    var productObj = {
      p_name : this.productData.p_name,
      p_desc : this.productData.p_desc,
      p_image: this.productData.p_image,
      reviews: this.productData.reviews,

    }
    this.service.putProduct(this.productData._id,productObj).subscribe(res=>{
      this.router.navigateByUrl('/dashboard/products')
      this.toastr.success('User Updated Successfully', 'User Updated')
    })
  }




}
