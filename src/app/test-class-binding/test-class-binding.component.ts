import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class-binding',
  template: `
    <h2>Class Binding</h2><br><br>

    <h2 class=TextStyle>Class Binding</h2><br><br>

    <!-- <h2 [class]="mytext">Class Binding</h2><br><br>

    <h2 [class]="mytext2">Class Binding</h2><br><br>

    <h2 [class]="mytext3">Class Binding</h2><br><br>

    <h2 [class.TextStyle]="req">Class Binding</h2><br><br> -->

    <h2 [ngClass]="Group">Class Binding</h2><br><br>
  `,
  styles: [`
    h2{
      text-align:center;
      font-size:30px;
      color:grey;
    }
    .TextSize{
      font-size: 60px;
    }
    .TextStyle{
      font-style: italic;
    }
    .TextColor{
      color: green;
    }
  `
  ]
})
export class TestClassBindingComponent implements OnInit {

  public mytext  = "TextColor";
  public mytext2 = "TextStyle";
  public mytext3 = "TextSize";

  public req = true;

  public reqStyle = true;
  public reqColor = true;

  public Group = {
    "TextStyle": this.reqStyle,
    "TextColor": this.reqColor
  }

  constructor() { }

  ngOnInit(): void {
  }

}
