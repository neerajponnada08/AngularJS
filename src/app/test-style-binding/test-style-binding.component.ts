import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style-binding',
  template: `
    <h2 [style.color]="'blue'">Style binding</h2><br><br>

    <h2 [style.color]="mycolor">Style binding</h2><br><br>

    <h2 [style.color]="req ? 'blue' : 'red' ">Style binding</h2><br><br>

    <h2 [ngStyle]="mystyle">Style binding</h2>
  `,
  styles: [
  ]
})
export class TestStyleBindingComponent implements OnInit {

  mycolor = "pink";
  req = false;
  public mystyle = {
    color:"gold",
    fontStyle:"italic",
    fontSize:"50px"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
