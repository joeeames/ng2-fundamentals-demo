import { Component, Input } from '@angular/core';


@Component({
  selector: 'event-details',
  template:`
  <div ng-controller="EventController" style="padding-left:20px; padding-right:20px">
    <img [src]="event.imageUrl" [alt]="event.name">

    <!--<div class="row">
      <div class="span11">
        <h2>{{event.name | uppercase}} </h2>
      </div>
    </div>

    <div class="row">
      <div class="span3">
        <div><strong>Date:</strong> {{event.date}}</div>
        <div><strong>Time:</strong> {{event.time}}</div>
        <div><strong>Price:</strong> {{34 | currency}}</div>
      </div>
      <div class="span4">
        <address>
          <strong>Address:</strong><br />
          {{event.location.address}}<br />
          {{event.location.city}}, {{event.location.province}}
        </address>
      </div>
    </div>

    <hr>

    <h3>Sessions</h3>
    Order By:
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
    </select>
    <ul class="thumbnails">
      <li ng-repeat="session in event.sessions | orderBy:sortorder | limitTo:3 | filter:query" id="session{{session.id}}">
        <div class="row session">
          <upvote upvote="upVoteSession(session)" downvote="downVoteSession(session)" count="session.upVoteCount"></upvote>
          <div class="well span9">
            <collapsible title="{{session.name}}">
                <h6 style="margin-top:-10px">{{session.creatorName}}</h6>
                <span>Duration: {{session.duration | durations}}</span><br />
                <span>Level: {{session.level}}</span>

                <p>{{session.abstract}}</p>
            </collapsible>
          </div>
        </div>
      </li>
    </ul>-->
  </div>

  `,
})
export class EventDetailsComponent {
  @Input() event: any;
}