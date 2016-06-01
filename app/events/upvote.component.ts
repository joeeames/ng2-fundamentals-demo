import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventService, Event } from './shared/shared';

@Component({
  moduleId: module.id,
  selector: 'upvote',
  styleUrls: ['upvote.component.css'],
  template:`
    <div class="votingWidgetContainer">
      <div class="well votingWidget">
        <div class="votingButton" (click)="onClick()">
            <i class="glyphicon glyphicon-thumbs-up" style="color:white"></i>
        </div>
        <div class="badge badge-inverse votingCount">
            <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
})
export class UpvoteComponent implements OnInit {
  @Output() vote = new EventEmitter();
  @Input() count : number;
  
  constructor() {}
  
  ngOnInit() {
  }
  
  onClick() {
    this.vote.emit({});
  }
}