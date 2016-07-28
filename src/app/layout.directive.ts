import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[layout]'
})
export class Layout {
  @Input() layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
      return (this.layout === 'column') ? 'column':'row';
  }
  constructor() {}

}
