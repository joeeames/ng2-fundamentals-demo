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
  sortedByName: boolean;
  sortedByVote: boolean;
  visibleSessions: Session[] = [];
  activeFilter: string;
  
  constructor(private eventService: EventService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    this.eventService.getEvent(+this.routeParams.get('id'))
      .subscribe(event => {
        this.event = event;
        this.filterSessions('all');
        this.sortByName();
        
      })
    this.voted = false;
  }
  
  sortByName() {
    this.visibleSessions.sort(sortByNameAsc);
    this.sortedByVote = false;
    this.sortedByName = true;
  }
  
  sortByVoteCount() {
    this.visibleSessions.sort(sortByVotesDesc);
    this.sortedByVote = true;
    this.sortedByName = false;
  }
  
  filterSessions(filter) {
    this.activeFilter = filter;
    if(filter === 'all') {
      this.visibleSessions = this.event.sessions.slice(0);
    } else {
      this.visibleSessions = this.event.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
  
  isActiveFilter(filter) {
    return filter === this.activeFilter;
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

function sortByNameAsc(s1: Session, s2: Session) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: Session, s2: Session) {
  return s2.voteCount - s1.voteCount
}