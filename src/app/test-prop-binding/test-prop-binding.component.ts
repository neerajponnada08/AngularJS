import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-prop-binding',
  template: `
    <input type="text" [id]="id" value="Angular 10"><br><br> <!-- Property Binding -->
    <input type="text" id="{{id}}" value="Angular 10"><br><br> <!-- Using Interpolation -->

    <!-- But interpolation doesn't work on boolean values it works only on strings, Refer below example -->
    <input disabled type="text" [id]="id" value="Angular 10"><br><br>
    
    <input disabled="false" type="text" [id]="id" value="Angular 10"><br><br> <!-- Interpolation is not working on boolean -->

    <input [disabled]="isDisabled" type="text" [id]="id" value="Angular 10"><br><br>

    <input bind-disabled="isDisabled" type="text" [id]="id" value="Angular 10"><br><br> <!--  Using bind variable -->
    
  `,
  styles: [
  ]
})
export class TestPropBindingComponent implements OnInit {

  id = 123;
  isDisabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
