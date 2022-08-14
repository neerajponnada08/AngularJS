import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { TestPropBindingComponent } from './test-prop-binding/test-prop-binding.component';
import { TestClassBindingComponent } from './test-class-binding/test-class-binding.component';
import { TestStyleBindingComponent } from './test-style-binding/test-style-binding.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTemplateRefVarComponent } from './test-template-ref-var/test-template-ref-var.component';
import { TestTwowaybindingComponent } from './test-twowaybinding/test-twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    TestPropBindingComponent,
    TestClassBindingComponent,
    TestStyleBindingComponent,
    TestEventBindingComponent,
    TestTemplateRefVarComponent,
    TestTwowaybindingComponent,
    TestNgIfComponent,
    TestNgSwitchComponent,
    TestNgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
