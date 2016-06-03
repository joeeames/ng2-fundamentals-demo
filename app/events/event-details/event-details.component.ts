import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event, Session } from '../shared/index';
import { RouteParams } from '@angular/router-deprecated';
import { SessionListComponent } from './session-list.component'

@Component({
  moduleId: module.id,
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  directives: [SessionListComponent]
})
export class EventDetailsComponent implements OnInit {
  event: Event
  sortBy: string = 'votes'
  filterBy: string = 'all'
    
  constructor(private eventService: EventService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    this.eventService.getEvent(+this.routeParams.get('id'))
      .subscribe(event => this.event = event)
   }
}
