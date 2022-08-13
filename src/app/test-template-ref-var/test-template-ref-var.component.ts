import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template-ref-var',
  template: `
    <p>
      test-template-ref-var works!
    </p>

    <br>
    <input #msg type="text" name="" id="">
    <button (click)="message(msg.value)" >Welcome</button><br><br>
    <p>{{text}}</p>
  `,
  styles: [
  ]
})
export class TestTemplateRefVarComponent implements OnInit {

  public text = "";
  constructor() { }

  ngOnInit(): void {
  }

  message(msg: any){
    console.log(msg);
    this.text=msg;
    return msg;
  }
}
