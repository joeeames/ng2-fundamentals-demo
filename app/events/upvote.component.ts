import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService, Event } from './shared/shared';


@Component({
  selector: 'upvote',
  styleUrls: ['app/events/upvote.component.css'],
  template:`
    <div class="votingWidgetContainer">
      <div class="well votingWidget">
        <div class="votingButton" (click)="localupvote()">
            <i class="glyphicon glyphicon-chevron-up" style="color:white"></i>
        </div>
        <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
        </div>
        <div class="votingButton" (click)="localdownvote()">
            <i class="glyphicon glyphicon-chevron-down"></i>
        </div>
      </div>
    </div>
  `,
})
export class UpvoteComponent implements OnInit {
  @Output() upVote = new EventEmitter();
  @Output() downVote = new EventEmitter();
  @Input() count : number;
  
  constructor() {}
  
  ngOnInit() {
  }
  
  localupvote() {
    this.upVote.emit({});
  }
  
  localdownvote() {
    this.downVote.emit({});
  }
}