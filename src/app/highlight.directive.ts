import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '<div [appHighlight]> </div>'
})
export class HighlightDirective {
  protected _elementClass: string[] = [];

  constructor() {
    this._elementClass = [];
    this._elementClass.push('square48');
  }

  @HostBinding('class')
  get elementClass(): string {
    return this._elementClass.join(' ');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._elementClass = [];
    this._elementClass.push('square48yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._elementClass = [];
    this._elementClass.push('square48');
  }

  @HostListener('click') onClick() {
    this._elementClass = [];
    this._elementClass.push('square48green');
  }

}
