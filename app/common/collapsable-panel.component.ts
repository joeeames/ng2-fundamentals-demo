import { Component } from '@angular/core';


@Component({
  selector: 'collapsable-panel',
  template:`
<div class="well hoverwell thumbnail" [routerLink]="['Event', {id: event.id}]">
  <h2>{{event.name}}</h2>
    <span>Date:</span>
    <span>{{event.date}}</span><br>
    <span>Time:</span>
    <span>{{event.time}}</span><br>
    <span>Location:</span>
    <span>{{event.location.address}}</span>
    <span>&nbsp;</span>
    <span>{{event.location.city}}, {{event.location.country}}</span>
</div>
  `,
})
export class CollapsablePanelComponent {
}