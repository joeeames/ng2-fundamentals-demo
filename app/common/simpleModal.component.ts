import {Component, Input, OnInit, ElementRef, Inject, ViewChild} from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

// initially we can get jquery this way. eventually we use a service so that it's testable
// declare var $ : any;

@Component({
  selector: 'simple-modal',
  template: `
  <div id="{{elementId}}" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" #modalbody>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
`,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `],
  directives: [
  ]
})
export class SimpleModalComponent {
  // don't be tempted to name this "id" since it will screw with the unique id for any given element
  @Input() elementId : string;
  @Input() closeOnBodyClick : boolean;
  @Input() title : string;
  private el: HTMLElement;

  @ViewChild('modalbody') bodyEl: ElementRef;

  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
  } 
  
  ngOnInit() {
    // this method shows how to do it without the viewchild
    // query
    // if(this.closeOnBodyClick) {
    //   this.el.getElementsByClassName('modal-body')[0].addEventListener('click', () => {
    //     this.$(`#${this.elementId}`).modal('hide');
    //   })
    // }
  }

  ngAfterViewInit() {
    if(this.closeOnBodyClick) {
      this.bodyEl.nativeElement.addEventListener('click', () => {
        this.$(`#${this.elementId}`).modal('hide');
      })
    }
  }

  
}