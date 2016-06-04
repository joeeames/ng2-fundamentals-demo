import { Component } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventService, EventsComponent } from './events/events';
import { NavBarComponent } from './nav/navbar.component';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './common/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  providers: [
    ROUTER_PROVIDERS,
    EventService,
    AuthService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    NavBarComponent
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true}
])
export class AppComponent {
  
  constructor(private http: Http, private auth: AuthService) {}
  
  ngOnInit() {
    this.auth.loginDefaultUser();
  }
  
 }
