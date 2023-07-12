import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Course } from './course';
@Injectable({
  providedIn: 'root'
})
export class CourseServiceImpl {

  constructor(private http: HttpClient) { }

  public getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:8080/course');
  }

  public addCourses(course: Course): Observable<Course>{
    return this.http.post<Course>('http://localhost:8080/course',course);
  }

  public updateCourses(course: Course): Observable<Course>{
    return this.http.put<Course>('http://localhost:8080/course/update',course);
  }

 public deleteCourses(courseId: number): Observable<any> {
    const url = `http://localhost:8080/course/delete/${courseId}`;
    return this.http.delete<any>(url);
  }

  public getCourseByCourseId(courseId: number): Observable<any> {
    const url = `http://localhost:8080/course/${courseId}`;
    return this.http.get<any>(url);
  }


}




