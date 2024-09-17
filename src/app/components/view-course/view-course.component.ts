import { Component, inject, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrl: './view-course.component.scss'
})
export class ViewCourseComponent implements OnInit {
  @Input() courseDetails!: Course;

  ngOnInit(): void {
  }

  get creditsCount() {
    return Object.keys(this.courseDetails.credits).length;
  }

  get credits() {
    const keys = Object.keys(this.courseDetails.credits);
    const values = Object.values(this.courseDetails.credits);
    return keys.map((item, index) => {
      return { creditName: item, creditValue: values[index] };
    });
  }
}
