import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewCourseComponent } from './components/view-course/view-course.component';
import { AssessmentProgressComponent } from './components/assessment-progress/assessment-progress.component';
import { StudentsAttendanceComponent } from './components/students-attendance/students-attendance.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    ViewCourseComponent,
    AssessmentProgressComponent,
    StudentsAttendanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ],
  providers: [
    provideHttpClient(withInterceptors([]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
