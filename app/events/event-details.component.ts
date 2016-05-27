import { Component, Input, OnInit } from '@angular/core';
import { EventService, IEvent, Session } from './event.service';
import { RouteParams } from '@angular/router-deprecated';
import { UpvoteComponent } from './upvote.component';

@Component({
  moduleId: module.id,
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  directives: [UpvoteComponent]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  voted: boolean;
  
  constructor(private eventService: EventService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    this.eventService.getEvent(+this.routeParams.get('id'))
      .subscribe(event => {
        this.event = event;
      })
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