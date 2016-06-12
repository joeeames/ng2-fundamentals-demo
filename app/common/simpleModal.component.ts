import {Component, Input, OnInit, ElementRef} from '@angular/core';

declare var $ : any;

@Component({
  moduleId: module.id,
  selector: 'simple-modal',
  template: `
  <div id="{{elementId}}" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
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

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  } 
  
  ngOnInit() {
    if(this.closeOnBodyClick) {   
      this.el.addEventListener('click', () => {
        $(`#${this.elementId}`).modal('hide');
      })
    }
  }

  
}