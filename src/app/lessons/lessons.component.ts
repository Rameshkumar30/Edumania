import {Component, OnInit} from '@angular/core';
import { Lesson } from '../lesson';
import { ActivatedRoute } from '@angular/router';
import { LessonServiceImpl } from '../lesson.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],

})
export class LessonsComponent implements OnInit{

  public lesson: Lesson[] = [];
  public editLessons!: Lesson;
  public deleteLessons!: Lesson;
  public courseId: number =0 ;

  constructor(private lessonService: LessonServiceImpl, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = +params.get('courseId')!;
      this.getLessonByCourseId(this.courseId);
    });
    this.getLessons();
  }
  public getLessons():void{
    this.lessonService.getLessons().subscribe(
      (response: Lesson[]) =>{
        this.lesson=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
 
  public getLessonByCourseId(courseId: number): void {
    this.lessonService.getLessonByCourseId(courseId).subscribe(
      (response: Lesson[]) => {
        this.lesson = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  public onAddLessons(addForm: NgForm):void{
    this.lessonService.addLessons(addForm.value).subscribe(
      (response: Lesson) =>{
        console.log(response);
        this.getLessons();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateLessons(lesson: Lesson):void{
    this.lessonService.updateLessons(lesson).subscribe(
      (response: Lesson) =>{
        console.log(response);
        this.getLessons();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onDeleteLessons(lessonId: number):void{
    this.lessonService.deleteLessons(lessonId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getLessons();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  openAddModal(lesson:null,mode:string):void{
    const button=document.getElementById('onAddLessons');
    if(button!=null){
      button.style.display='block';
    }
  }

  openEditModal(lesson:Lesson,mode:string):void{
    this.editLessons=lesson;
    const button=document.getElementById('onEditLessons');
    if(button!=null){
      button.style.display='block';
    }
  }

  openDeleteModal(lesson:Lesson,mode:string):void{
    this.deleteLessons=lesson;
    const button=document.getElementById('onDeleteLessons');
    if(button!=null){
      button.style.display='block';
    }
  }

  closeAddModal(){
    const button=document.getElementById('onAddLessons');
    if(button!=null){
      button.style.display='none';
    }
  }

  closeEditModal(){
    const button=document.getElementById('onEditLessons');
    if(button!=null){
      button.style.display='none';
    }
  }

  closeDeleteModal(){
    const button=document.getElementById('onDeleteLessons');
    if(button!=null){
      button.style.display='none';
    }
  }

  getFilteredLessons(): Lesson[] {
    return this.lesson.filter(lesson => lesson.courseId === this.courseId);
  }
  

}

