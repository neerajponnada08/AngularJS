import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  template: `
    <p>
      test-ng-for works!
    </p>
    <br><br>
    <div *ngFor="let x of subjects;index as i"><!-- Basic ngFor -->
      {{x}} --> {{i}}
    </div><br><br>

    <div *ngFor="let x of subjects;first as f"><!-- First as f -->
      {{x}} --> {{f}}
    </div><br><br>

    <div *ngFor="let x of subjects;last as l"><!-- Last as l -->
      {{x}} --> {{l}}
    </div><br><br>

    <div *ngFor="let x of subjects;even as e"><!-- Last as l -->
      {{x}} --> {{e}}
    </div><br><br>

    <div *ngFor="let x of subjects;odd as o"><!-- Last as l -->
      {{x}} --> {{o}}
    </div><br><br>
  `,
  styles: [
  ]
})
export class TestNgForComponent implements OnInit {

  public subjects = ["Angu","reac","Node"];
  constructor() { }

  ngOnInit(): void {
  }

}
