import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  template: `
    <h2>Event-Binding</h2><br>
    <button (click)="onClick()">Click me</button><br><br>
    <h2>{{clickevent}}</h2>
  `,
  styles: [
  ]
})
export class TestEventBindingComponent implements OnInit {

  public clickevent = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    console.log("Click event occured!!")
    this.clickevent = "Click occured";
  }
}
