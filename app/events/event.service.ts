import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EventService {
  
  constructor(private http: Http) {}
  
  getEvents() {
    return this.http.get("/api/events")
      .map((response: Response) => {
        return <IEvent[]>response.json();
      }).catch(this.handleError);
  }
  
  getEvent(id: number) {
    return this.http.get("/api/events/" + id)
      .map((response: Response) => {
        return <IEvent>response.json();
      }).catch(this.handleError);
  }
  
  createEvent(eventData: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    
    var ret = this.http.post("/api/events", JSON.stringify(eventData), options);
    return ret.map((response: Response) => {
        var returnedData = response.json();
        return returnedData;
    }).catch(this.handleError);
    
  }
  
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server Error");
  }
}

export interface IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    country: string;
  }
  sessions: Session[]; 
}

export class Event implements IEvent {
  id: number;
  name: string;
  date: string;
  time: string;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    country: string;
  }
  sessions: Session[]; 
  
  constructor() {
    this.location = {
      address: "",
      city: "",
      country: ""
    }
    
  }
}

export interface Session {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voteCount: number;
}

