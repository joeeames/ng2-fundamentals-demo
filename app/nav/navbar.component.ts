import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { EventService, Event } from '../events/index';
import { AuthService, User } from '../users/auth.service';
import { ModalTriggerDirective } from '../common/modalTrigger.directive';
import { SimpleModalComponent } from '../common/simpleModal.component';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: `navbar.component.html`,
  styles: [`
    .nav.navbar-nav {font-size:15px} 
    #searchForm {margin-right:100px; } 
    .profile {font-size:15px}
    @media (max-width: 1200px) {#searchForm {display:none}}
    `],
  directives: [
    RouterLink,
    ModalTriggerDirective,
    SimpleModalComponent
  ]
})
export class NavBarComponent {
  events: Event[];
  searchTerm: string = "";
  foundSessions: any;
  
  constructor(private eventService: EventService,
    private auth: AuthService) {
  } 
  
  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(events => {
        this.events = events;
      })
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(sessions => {
        this.foundSessions = sessions;
      })
  } 
}