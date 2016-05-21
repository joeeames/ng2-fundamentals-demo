import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// use of [textOverflow]="session.abstract"
// is the same as textOverflow="{{session.abstract}}"

@Directive({
  selector: '[textOverflow]',
  host: {
    '(click)': 'onClick()'
  }
})
export class TextOverflowDirective implements OnInit {
  private el: HTMLElement;
  private displayTruncated: boolean;
  private textTruncateLength: number;
  
  constructor(el: ElementRef) { this.el = el.nativeElement; }
  
  @Input('textOverflow') sourceText: string;

  @Input('textLength') textLength: string;
  
  ngOnInit() {
    this.textTruncateLength = this.textLength ? +this.textLength : 50;
    this.el.innerText = this.sourceText.substr(0, this.textTruncateLength)
    this.displayTruncated = true;
    this.el.style.cursor = "pointer";
  }

  onClick() { 
    console.log('clicked', this.textTruncateLength, this.el.innerText);
    this.toggleTextOverflow(); 
  }

  private toggleTextOverflow() {
    if(this.displayTruncated) {
      this.el.innerText = this.sourceText;
      this.displayTruncated = false;
    } else {
      this.el.innerText = this.sourceText.substr(0, this.textTruncateLength) + '...'
      this.displayTruncated = true;
    }
  }
}
