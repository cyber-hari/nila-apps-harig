import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)

  constructor() { }

  getCourses(): Observable<Course[]> {
    return this.http.get(`courses.json`).pipe(map((item: any)=> item.response));
  }

  getChartOneData(): Observable<any> {
    return this.http.get(`chart-one.json`);
  }

  getChartTwoData(): Observable<any> {
    return this.http.get(`chart-two.json`);
  }
}
