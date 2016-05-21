import { Injectable } from '@angular/core';


@Injectable()
export class EventService {
  
  getEvents() {
    return EVENTS;
  }
  
  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
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
    this.id = this.getNewId();
    this.location = {
      address: "",
      city: "",
      country: ""
    }
    
  }
  
  private getNewId() {
    return 35;
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

const EVENTS: IEvent[] = [
      {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2016',
        time: '10:00 am',
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'London',
          country: 'England'
        },
        sessions: [
          {
            id: 1,
            name: "Angular 2 Pipes",
            presenter: "Peter Bacon Darwin",
            duration: 3,
            level: "Intermediate",
            abstract: "Learn all about Pipes with PBD",
            voteCount: 4
          },
          {
            id: 2,
            name: "Angular Performance Metrics",
            presenter: "Rob Wormald",
            duration: 4,
            level: "Advanced",
            abstract: "Angular 2 Performance is hot. In this session, we'll see all about it",
            voteCount: 7
          }
        ]
      },
      {
        id: 2,
        name: 'ng-nl',
        date: '4/15/2017',
        time: '9:00 am',
        imageUrl: '/app/assets/images/ng-nl.png',
        location: {
          address: 'The NL Convention Center',
          city: 'Amsterdam',
          country: 'Netherlands'
        },
        sessions: []
      }
    ]