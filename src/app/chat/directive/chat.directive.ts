import { Directive, Input, ElementRef } from '@angular/core';
import { Message } from '../../message';

@Directive({
  selector: '[appChat]'
})
export class ChatDirective {
  @Input() idCorrespondent: string;
  @Input() msg: Message;



  constructor(private el: ElementRef) {}
  ngOnInit(){
    if ( this.idCorrespondent == this.msg.idReceiver){
      this.el.nativeElement.children[0].style.backgroundColor = 'rgb(100, 253, 100)';
      this.el.nativeElement.style.textAlign = "left";
    }
    else{
      this.el.nativeElement.children[0].style.backgroundColor = "blue";
      this.el.nativeElement.style.textAlign = "right";
    }
    
   }

}
