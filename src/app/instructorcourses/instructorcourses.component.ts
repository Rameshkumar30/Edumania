import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseServiceImpl } from '../course.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructorcourses',
  templateUrl: './instructorcourses.component.html',
  styleUrls: ['./instructorcourses.component.css']
})
export class InstructorcoursesComponent implements OnInit{
  public course: Course[] = [];
  public editCourses!: Course;
  public deleteCourses!: Course;
  constructor(private courseService: CourseServiceImpl,private router: Router){}
  ngOnInit() {
    this.getCourses();
   }

  public getCourses():void{
    this.courseService.getCourses().subscribe(
      (response: Course[]) =>{
        this.course=response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onAddCourses(addForm: NgForm):void{
    this.courseService.addCourses(addForm.value).subscribe(
      (response: Course) =>{
        console.log(response);
        this.getCourses();
        addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCourses(course: Course):void{
    this.courseService.updateCourses(course).subscribe(
      (response: Course) =>{
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public onDeleteCourses(courseId: number):void{
    this.courseService.deleteCourses(courseId).subscribe(
      (response: void) =>{
        console.log(response);
        this.getCourses();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }

  public showlessons(courseId?:number):void{
    this.router.navigate(['lessons', courseId]);
  }

  openAddModal(course:null,mode:string):void{
    const button=document.getElementById('onAddCourses');
    if(button!=null){
      button.style.display='block';
    }
  }

  openEditModal(course:Course,mode:string):void{
    this.editCourses=course;
    const button=document.getElementById('onEditCourses');
    if(button!=null){
      button.style.display='block';
    }
  }

  openDeleteModal(course:Course,mode:string):void{
    this.deleteCourses=course;
    const button=document.getElementById('onDeleteCourses');
    if(button!=null){
      button.style.display='block';
    }
  }

  closeAddModal(){
    const button=document.getElementById('onAddCourses');
    if(button!=null){
      button.style.display='none';
    }
  }

  closeEditModal(){
    const button=document.getElementById('onEditCourses');
    if(button!=null){
      button.style.display='none';
    }
  }

  closeDeleteModal(){
    const button=document.getElementById('onDeleteCourses');
    if(button!=null){
      button.style.display='none';
    }
  }
}
