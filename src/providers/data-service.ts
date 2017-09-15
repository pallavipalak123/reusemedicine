import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
declare var google;
@Injectable()
export class DataService {
  constructor(private http: Http) {
    console.log('Hello DataService Provider');    
  }

sendrequest(data){
    return this.http.post('https://mynodecode.herokuapp.com/register',data)
      .map(
        result =>
        {
          return result.json()
        });
  }

login(data){
  
    return this.http.post('https://mynodecode.herokuapp.com/login',data)
      .map(
        result =>
        {
          return result.json()
        });
  }
// verification(data){
  
//     return this.http.post('http://httpbin.org/user-agent',data)
//       .map(
//         result =>
//         {
//           return result.json()
//         });
//   }
  forgotpassword(data){
  
    return this.http.post('http://httpbin.org/user-agent',data)
      .map(
        result =>
        {
          return result.json()
        });
  }
   
}