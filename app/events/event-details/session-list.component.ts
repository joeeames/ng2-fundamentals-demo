import { Component, OnChanges, Input } from '@angular/core';
import { Session } from '../shared/index';
import { UpvoteComponent } from './upvote.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { AuthService } from '../../users/auth.service';

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
  visibleSessions: Session[] = [];
  
  constructor(private auth: AuthService) {  }
  
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
    if(this.userHasVoted(session)) {
      session.voteCount--;
      session.voters = session.voters.filter(voter => voter !== this.auth.currentUser.userName);
    } else {
      session.voteCount++;
      session.voters.push(this.auth.currentUser.userName);
    }
    if(this.sortBy === 'votes')
        this.visibleSessions.sort(sortByVotesDesc)
  }
    
  userHasVoted(session: Session) {
    return session.voters.some(voter => voter === this.auth.currentUser.userName)
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