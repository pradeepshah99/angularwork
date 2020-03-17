import { Component, OnInit } from '@angular/core';
import {NodeserviceService} from '../../service/nodeservice.service';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:  NodeserviceService, 
    private toastr: ToastrService,
    private dataservice : DataService,
    private router : Router
    
    ) { }
  data:any;

  ngOnInit() {
   
    this.service.getProduct().subscribe((res)=> {console.log(res)
      this.data = res
      this.toastr.success('Product List Fetched', 'Successfully!');
  })
  


}

onDeleteProduct(id){
  console.log(id)
  if(window.confirm('Are you sure?') === true)
  {
    this.service.deleteProduct(id).subscribe((res)=>
  {
    this.service.getProduct().subscribe((res)=> {console.log(res)
      this.data = res
      this.toastr.success('Product Deleted', 'Successfully');
    })
    
  })
  }
  else {
    return;
  }
  


}


// editProduct(userObject){
//   var userData = {
//     _id: userObject._id,
//     f_name: userObject.f_name,
//     l_name: userObject.l_name,
//     email: userObject.email
//   }
//   this.dataservice.changeData(userData)

//   this.router.navigateByUrl('/dashboard/products/editproduct')
// }


editProduct(productObject)
{
console.log(productObject)
  var productData = {
    _id : productObject._id,
    p_name : productObject.p_name,
    p_desc : productObject.p_desc,
    p_image: productObject.p_image,
    reviews : productObject.reviews


  }
  this.dataservice.changeData(productData)
  this.router.navigateByUrl('/dashboard/products/editproduct/'+productData._id)
}
}

