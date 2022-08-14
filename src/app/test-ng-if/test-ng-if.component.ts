import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-if',
  template: `
    <p>
      test-ng-if works!
    </p><br><br>

    <h1 *ngIf="stat">Welcome Mr.{{name}}</h1> <!-- Gneral ngIf block -->

    <!-- if we want to excute else block also... -->

    <h2 *ngIf="stat; else elseBlock">stat is true</h2>

    <ng-template #elseBlock>

      <h2>stat is false</h2>

    </ng-template>



  `,
  styles: [`
    h1{
      text-align:center;
      color:green;
    }
  `
  ]
})
export class TestNgIfComponent implements OnInit {

  public name = "Neeraj";
  public stat = false;
  constructor() { }

  ngOnInit(): void {
  }

}
