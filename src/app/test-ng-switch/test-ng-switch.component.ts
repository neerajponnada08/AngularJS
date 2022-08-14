import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-switch',
  template: `
    <p>
      test-ng-switch works!
    </p>
    <div [ngSwitch]="myChoice">
      <div class="switchCase">
        <div *ngSwitchCase="'one'">
          First Block
        </div>
        <div *ngSwitchCase="'two'">
          Second Block
        </div>
        <div *ngSwitchCase="'three'">
          Third Block
        </div>
        <div *ngSwitchDefault>
          Default Block
        </div>
      </div>
    </div>
  `,
  styles: [`
    .switchCase{
      font-size:20px;
      color: violet;
      font-width: bold;
      text-align:center;
  }
  `
  ]
})
export class TestNgSwitchComponent implements OnInit {

  public myChoice = "three";
  constructor() { }

  ngOnInit(): void {
  }

}
