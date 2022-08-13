import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { TestPropBindingComponent } from './test-prop-binding/test-prop-binding.component';
import { TestClassBindingComponent } from './test-class-binding/test-class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    TestPropBindingComponent,
    TestClassBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
