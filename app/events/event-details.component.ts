import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event, Session } from './shared/shared';
import { RouteParams } from '@angular/router-deprecated';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../common/collapsible-well.component';

@Component({
  moduleId: module.id,
  selector: 'event-details',
  templateUrl: 'event-details.component.html',
  styles: ['collapsible-panel > h6 {margin-top:-5px; margin-bottom:10px }'],
  directives: [UpvoteComponent, CollapsibleWellComponent]
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  voted: boolean;
  visibleSessions: Session[] = [];
  activeFilter: string;
  activeSort: string;
  
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
  
  isFiltered(filterType) {
    return this.activeFilter === filterType; 
  }
  
  isSorted(sortType) {
    return this.activeSort === sortType; 
  }
  
  // we can use [ngClass] but we can also use [class.active] which is better in this case
  
  sortByName() {
    this.visibleSessions.sort(sortByNameAsc);
    this.activeSort = 'name';
  }
  
  sortByVoteCount() {
    this.visibleSessions.sort(sortByVotesDesc);
    this.activeSort = 'vote';
  }
  
  // using an immutable operation so as not to filter the source array
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
  
  toggleVote(session: Session) {
    if(!this.voted) {
      session.voteCount++;
      this.voted = true;
    } else {
      session.voteCount--;
      this.voted = false;
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