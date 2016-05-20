import { Component, OnInit } from '@angular/core';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService, Event } from './event.service';

@Component({
  selector: 'events-list',
  template:`
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event" ></event-thumbnail>
      </div>
    </div>
  </div>
  `,
  directives: [
    EventThumbnailComponent
  ]
})
export class EventsListComponent {
  events: Event[];
  
  constructor() {
    this.events = EVENTS;
  }  
  
  ngOnInit() {
    
  }
}


// const EVENTS = [
//       {
//         id: 1,
//         name: 'Angular Connect',
//         date: '9/26/2016',
//         time: '10:00 am',
//         imageUrl: '/app/assets/images/angularconnect-shield.png',
//         location: {
//           address: '1057 DT',
//           city: 'Amsterdam',
//           province: 'England'
//         }
//       },
//       {
//         id: 2,
//         name: 'ng-nl',
//         date: '4/15/2017',
//         time: '9:00 am',
//         location: {
//           address: 'The NL Convention Center',
//           city: 'London',
//           province: 'Netherlands'
//         }
//       },
//     ]