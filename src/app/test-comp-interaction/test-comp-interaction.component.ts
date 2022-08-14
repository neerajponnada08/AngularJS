import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-comp-interaction',
  template: `
    <p>
      test-comp-interaction works!
    </p>
    <br><br>
    <!-- <p>{{fromParent}}</p> -->
    <br><br>
    <p>{{fParent}}</p>
    <br>
    <button (click)="fireEvent()">Click me</button>
  `,
  styles: [
  ]
})
export class TestCompInteractionComponent implements OnInit {

  // @Input() public fromParent: any;
  @Input('fromParent') public fParent: any;

  @Output() public childMSG = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childMSG.emit("This is from child");
  }

}
