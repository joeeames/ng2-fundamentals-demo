import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'events-app',
  template: `
    <router-outlet></router-outlet>
  `,
  providers: [
    ROUTER_PROVIDERS
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true}
])
export class AppComponent { }
