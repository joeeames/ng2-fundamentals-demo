import { Component, OnChanges, Input } from '@angular/core';
import { Session } from '../shared/index';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';

@Component({
  moduleId: module.id,
  selector: 'session-list',
  templateUrl: 'session-list.component.html',
  styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
  directives: [UpvoteComponent, CollapsibleWellComponent]
})
export class SessionListComponent implements OnChanges {
  @Input() sessions:Session[];
  @Input() sortBy:string;
  @Input() filterBy:string;
  voted: boolean = false;
  visibleSessions: Session[] = [];
  
  constructor() {  }
  
  ngOnChanges() {
    if  (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  // using an immutable operation so as not to filter the source array
  filterSessions(filter) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
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
    if(this.sortBy === 'votes')
        this.visibleSessions.sort(sortByVotesDesc)
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