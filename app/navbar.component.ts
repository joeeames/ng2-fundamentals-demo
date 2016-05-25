import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { EventService, IEvent } from './events/event.service';

@Component({
  selector: 'nav-bar',
  template: `
  <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" [routerLink]="['Events']">ngEvents</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active">
            <a [routerLink]="['Events']">All Events 
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li><a [routerLink]="['Events/CreateEvent']">Create Event</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Events <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li *ngFor="let event of events">
                <a [routerLink]="['Events/Event', {id: event.id}]">{{event.name}}</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="navbar-header navbar-right">
          <a class="navbar-brand" [routerLink]="['Events']">Welcome Joe</a>
        </div>
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search Sessions">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </div>
  `,
  directives: [
    RouterLink
  ]
})
export class NavBarComponent {
  events: IEvent[];
  
  constructor(private eventService: EventService) {
  } 
  
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}