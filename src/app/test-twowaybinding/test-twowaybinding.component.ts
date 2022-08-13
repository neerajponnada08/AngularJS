import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-twowaybinding',
  template: `
    <p>
      test-twowaybinding works!
    </p><br><br>

    <input [(ngModel)]="data" type="text" name="" id="">
    <button (click)="hoverme()">Click me</button><br><br>
    <p [style.color]="style">{{data}}</p>
  `,
  styles: [`
   
  `
  ]
})
export class TestTwowaybindingComponent implements OnInit {

  public data = "";
  public style = "blue";
  constructor() { }

  ngOnInit(): void {
  }

  hoverme(){
    this.style = "red";
  }

}
