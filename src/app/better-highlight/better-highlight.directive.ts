import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  @Input() defaultFontColor:string = 'black';
  @Input() highlightFontColor:string = 'white';
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostBinding('style.color') color:string;

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    // this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    this.backgroundColor = this.defaultColor;
    this.color = this.defaultFontColor;
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor = this.highlightColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'color','white');
    this.color = this.highlightFontColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement,'color','black');
    this.color = this.defaultFontColor;
  }

  
}
