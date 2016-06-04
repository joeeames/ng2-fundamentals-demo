import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { EventService, Event } from '../events/index';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: `navbar.component.html`,
  directives: [
    RouterLink
  ]
})
export class NavBarComponent {
  events: Event[];
  
  constructor(private eventService: EventService) {
  } 
  
  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      })
  }
}