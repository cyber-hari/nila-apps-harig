import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Course } from './models/course.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private apiService = inject(ApiService);

  courses: Course[] = [];
  selectedCourse!: Course;
  assessmentProgressData: any;
  studentsAttendanceData: any;

  ngOnInit(): void {
    this.getCourses();
    this.getAssessmentProgress();
    this.getStudentsAttendanceData();
  }

  getCourses() {
    this.apiService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
        this.setSelectedCourse('BA3102');
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error on getting course ==>', err);
      }
    });
  }

  setSelectedCourse(courseCode: string) {
    // Mocking user select action from table in parent component
    this.selectedCourse = this.courses.find(course => course.courseCode === courseCode) as Course;
  }

  getStudentsAttendanceData() {
    this.apiService.getChartTwoData().subscribe({
      next: (res) => {
        if (res.response) {
          this.studentsAttendanceData = res.response;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error on getting chart two data ==> ', err);
      }
    })
  }

  getAssessmentProgress() {
    this.apiService.getChartOneData().subscribe({
      next: (res) => {
        if (res.response) {
          this.assessmentProgressData = {
            categories: Object.keys(res.response),
            pending: Object.values(res.response).map((item: any) => item.pending),
            completed: Object.values(res.response).map((item: any) => item.completed)
          }
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error on getting chart two data ==> ', err);
      }
    });
  }
}
