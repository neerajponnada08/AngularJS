import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      Welcome to Interpolation <b>{{name}}</b> !!
    </p>
    <p>
      {{"Welcome to string concatenation"+"!!"}}
    </p>
    <p>
      {{name.length}}
    </p>
    <p>
      {{userName()}}
    </p>
  `,
  styles: [`
    p{
      text-align:center;
      font-size:30px;
      color:green;
    }
  `
  ]
})
export class TestComponent implements OnInit {

  public name = "Neeraj";
  constructor() { }

  ngOnInit(): void {
  }

  userName(){
    return "Welcome: "+this.name;
  }

}
