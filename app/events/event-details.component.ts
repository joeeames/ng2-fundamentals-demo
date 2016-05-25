import { Component, Input, OnInit } from '@angular/core';
import { EventService, IEvent, Session } from './event.service';
import { RouteParams } from '@angular/router-deprecated';
import { UpvoteComponent } from './upvote.component';


@Component({
  selector: 'event-details',
  template:`
  <div ng-controller="EventController" style="padding-left:20px; padding-right:20px">
    <img [src]="event.imageUrl" [alt]="event.name">

    <div class="row">
      <div class="span11">
        <h2>{{event.name | uppercase}} </h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div><strong>Date:</strong> {{event.date}}</div>
        <div><strong>Time:</strong> {{event.time}}</div>
        <div><strong>Price:</strong> {{499 | currency:"USD":true}}</div>
      </div>
      <div class="col-md-6">
        <address>
          <strong>Address:</strong><br />
          {{event.location.address}}<br />
          {{event.location.city}}, {{event.location.country}}
        </address>
      </div>
    </div>

    <hr>

    <h3>Sessions</h3>
    <!--Order By:
    <select name="" id="" ng-model="sortorder" class="input-small">
      <option value="name" selected>Name</option>
      <option value="-upVoteCount">Votes</option>
    </select>
    Show:
    <select name="" id="" ng-model="query.level" class="input-medium">
      <option value="" selected>All</option>
      <option value="introductory" >Introductory</option>
      <option value="intermediate" >Intermediate</option>
      <option value="advanced" >Advanced</option>
    </select>-->
    <div class="row" *ngFor="let session of event.sessions">
      <div class="col-md-1">
        <upvote (upVote)="upVoteSession(session)" 
          (downVote)="downVoteSession(session)" 
          [count]="session.voteCount"></upvote>
      </div>
      <div class="well col-md-11">
        A Session
        <collapsible title="{{session.name}}">
            <h6 style="margin-top:-10px">{{session.creatorName}}</h6>
            <span>Duration: {{session.duration}}</span><br />
            <span>Level: {{session.level}}</span>

            <p>{{session.abstract}}</p>
        </collapsible>
      </div>
    </div>
  </div>

  `,
  directives: [UpvoteComponent]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  voted: boolean;
  
  constructor(private eventService: EventService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.routeParams.get('id'))
    this.voted = false;
  }
  
  upVoteSession(session: Session) {
    if(!this.voted) {
      session.voteCount++;
      this.voted = true;
    }
  }
  
  downVoteSession(session: Session) {
    if(!this.voted && session.voteCount > 0) {
      session.voteCount--;
      this.voted = true;
    }
  }
}