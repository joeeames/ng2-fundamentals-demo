import { Component, provide } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { EventService, EventsComponent } from './events/index';
import { NavBarComponent } from './nav/navbar.component';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './users/auth.service';
import { ProfileComponent } from './users/profile.component';
import { TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/jQuery.service';

// don't accidentally try to export these
declare let toastr: Object;
declare let $: any;

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
  providers: [
    ROUTER_PROVIDERS,
    EventService,
    AuthService,
    provide(TOASTR_TOKEN, {useValue: toastr}),
    provide(JQ_TOKEN, { useValue: $})
  ],
  directives: [
    ROUTER_DIRECTIVES,
    NavBarComponent
  ]
})
@RouteConfig([
  {path: '/events/...', name: 'Events', component: EventsComponent, useAsDefault: true},
  {path: '/profile', name: 'Profile', component: ProfileComponent}
])
export class AppComponent {
  
  constructor(private auth: AuthService) {}
  
  ngOnInit() {
    this.auth.loginDefaultUser();
  }
  
 }
