import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
  
  constructor(private http: Http) {}
  
  loginDefaultUser() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    let loginInfo = {username: 'johnpapa', password: '1234'};

    this.http.post('/api/login',
      JSON.stringify(loginInfo), 
      options
    )
    .catch(this.handleError)
    .subscribe(resp =>{
      // have to subscribe to make the post actually happen
    })
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
