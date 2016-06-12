import { Directive, OnInit, ElementRef, Input } from '@angular/core';

declare var $ : any;

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') searchModalId : string;
  
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
   
    this.el.addEventListener('click', e => {
      $(`#${this.searchModalId}`).modal({})
    })

  }
  
  ngOnInit() {

  }
}