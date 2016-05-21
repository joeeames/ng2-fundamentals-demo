import { Directive, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[datekeys]',
  host: {
    '(keydown)': 'onKeydown()'
  }
})
export class TextOverflowDirective implements OnInit {
  private el: HTMLElement;
  
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  
  ngOnInit() {
  }

  onKeydown() { 
    console.log('args', arguments);
  }
}
