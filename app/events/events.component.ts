import { Component } from '@angular/core';
import { EventsListComponent } from './events-list.component';
import { EventDetailsComponent } from './event-details.component';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';

@Component({
  selector: 'events-root',
  template:`
  <router-outlet></router-outlet> 
  `,
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Events', component: EventsListComponent, useAsDefault: true},
  {path: '/:id', name: 'Event', component: EventDetailsComponent}
])
export class EventsComponent {
}