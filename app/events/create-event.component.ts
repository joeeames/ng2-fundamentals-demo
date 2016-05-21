import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event, Session } from './event.service';


@Component({
  selector: 'create-event',
  templateUrl: "/app/events/create-event.component.html",
  directives: []
})
export class CreateEventComponent implements OnInit {
  newEvent: Event;
  
  constructor(private eventService: EventService) {}
  
  ngOnInit() {
    this.newEvent = new Event();
  }
  

}