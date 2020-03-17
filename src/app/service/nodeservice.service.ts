import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeserviceService {

  userLogin(body: any): Observable<any>{
    return this.http.post('http://localhost:4000/user/login' ,body)
  }

  getallUser():Observable<any> {

    return this.http.get('http://localhost:4000/user/');
    
  }

 getProduct(): Observable<any>{
   return this.http.get('http://localhost:4000/product/')
 }

 userRegister(body:any):Observable<any>{
   return this.http.post('http://localhost:4000/user/register' ,body)
 }

 addProduct(body:any): Observable<any>{
   return this.http.post('http://localhost:4000/product/create', body)
 }

 deleteUser(id:any):Observable<any>
 {
return this.http.delete('http://localhost:4000/user/delete/'+id)
 }

 deleteProduct(id:any):Observable<any>
 {
return this.http.delete('http://localhost:4000/product/delete/'+id)
 }

 putUser(id, body): Observable<any>{
   return this.http.put('http://localhost:4000/user/update/'+id, body)

 }

 putProduct(id, body): Observable<any>{
  return this.http.put('http://localhost:4000/product/update/'+id, body)

}


  constructor( private http: HttpClient) { }
}
