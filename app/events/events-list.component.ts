import { Component, OnInit } from '@angular/core';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService, IEvent } from './event.service';

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
  events: IEvent[];
  
  constructor(private eventService: EventService) {
  }  
  
  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      console.log('events', events);
      this.events = events;
    })
  }
}
