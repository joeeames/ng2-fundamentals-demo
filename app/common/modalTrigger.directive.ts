import { Directive, OnInit, ElementRef, Input, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

// declare var $ : any;

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') searchModalId : string;
  
  constructor(el: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
    this.el = el.nativeElement;
   
    this.el.addEventListener('click', e => {
      this.$(`#${this.searchModalId}`).modal({})
    })

  }
  
  ngOnInit() {

  }
}