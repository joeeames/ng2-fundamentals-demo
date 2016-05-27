import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { IEvent } from './event.service';

@Injectable()
export class EventService {
  
  constructor(private http: Http) {}
  
  getEvents() {
    console.log('here')
    return this.http.get("/api/events")
      .map((response: Response) => {
        return <IEvent[]>response.json();
      }).catch(this.handleError);
  }
  
  getEvent(id: number) {
    return this.http.get("/api/events/" + id)
      .map((response: Response) => {
        console.log('ret val', <IEvent>response.json());
        return <IEvent>response.json();
      }).catch(this.handleError);
  }
  
  createEvent(eventData: any) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers });
    
    var ret = this.http.post("/api/events", JSON.stringify(eventData), options);
    return ret.map((response: Response) => {
        var returnedData = response.json();
        EVENTS.push(returnedData);
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

const EVENTS: IEvent[] = [];

// const EVENTS: IEvent[] = [
//       {
//         id: 1,
//         name: 'Angular Connect',
//         date: '9/26/2016',
//         time: '10:00 am',
//         imageUrl: '/app/assets/images/angularconnect-shield.png',
//         location: {
//           address: '1057 DT',
//           city: 'London',
//           country: 'England'
//         },
//         sessions: [
//           {
//             id: 1,
//             name: "Angular 2 Pipes",
//             presenter: "Peter Bacon Darwin",
//             duration: 3,
//             level: "Intermediate",
//             abstract: "Learn all about Pipes with PBD",
//             voteCount: 4
//           },
//           {
//             id: 2,
//             name: "Angular Performance Metrics",
//             presenter: "Rob Wormald",
//             duration: 4,
//             level: "Advanced",
//             abstract: "Angular 2 Performance is hot. In this session, we'll see all about it",
//             voteCount: 7
//           }
//         ]
//       },
//       {
//         id: 2,
//         name: 'ng-nl',
//         date: '4/15/2017',
//         time: '9:00 am',
//         imageUrl: '/app/assets/images/ng-nl.png',
//         location: {
//           address: 'The NL Convention Center',
//           city: 'Amsterdam',
//           country: 'Netherlands'
//         },
//         sessions: []
//       }
//     ]