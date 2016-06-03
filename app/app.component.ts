import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventService, EventsComponent } from './events/index';
import { NavBarComponent } from './nav/navbar.component';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  providers: [
    ROUTER_PROVIDERS,
    EventService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    NavBarComponent
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true}
])
export class AppComponent { }
