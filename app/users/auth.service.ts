import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string
}

@Injectable()
export class AuthService {
  currentUser: User;
  
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
      this.currentUser = <User>resp.json().user;
    })
  }

  updateCurrentUser() {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    
    var result = this.http.put(`/api/users/${this.currentUser.id}`, 
      JSON.stringify(this.currentUser), options);
      
    return result.map((response: Response) => {
        var returnedData = response.json();
        return returnedData;
    }).catch(this.handleError);
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}
