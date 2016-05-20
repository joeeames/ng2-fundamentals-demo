import { Injectable } from '@angular/core';

// interface IEventService {
//   getEvents: Function => Event[];
// }

@Injectable()
export class EventService {
  
  getEvents() {
    return EVENTS;
  }
  
  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }
}

export interface Event {
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
}

const EVENTS = [
      {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2016',
        time: '10:00 am',
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
          address: '1057 DT',
          city: 'Amsterdam',
          country: 'England'
        }
      },
      {
        id: 2,
        name: 'ng-nl',
        date: '4/15/2017',
        time: '9:00 am',
        location: {
          address: 'The NL Convention Center',
          city: 'London',
          country: 'Netherlands'
        }
      },
    ]