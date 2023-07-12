import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonServiceImpl {

  constructor(private http: HttpClient) { }
  
  public getLessons(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>('http://localhost:8080/lesson');
  }

  public addLessons(lesson: Lesson): Observable<Lesson>{
    return this.http.post<Lesson>('http://localhost:8080/lesson/add',lesson);
  }

  public updateLessons(lesson: Lesson): Observable<Lesson>{
    return this.http.put<Lesson>('http://localhost:8080/lesson/update',lesson);
  }

 public deleteLessons(lessonId: number): Observable<any> {
    const url = `http://localhost:8080/lesson/delete/${lessonId}`;
    return this.http.delete<any>(url);
  }

  public getLessonByCourseId(courseId:number): Observable<any> {
    const url = `http://Localhost:8080/lesson/${courseId}`;
    return this.http.get<any>(url);
  }


}
