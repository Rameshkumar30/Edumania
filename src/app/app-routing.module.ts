import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorcoursesComponent } from './instructorcourses/instructorcourses.component';

import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';
import { LessonsComponent } from './lessons/lessons.component';



const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:InstructorcoursesComponent},
  {path:"lessons/:courseId",component:LessonsComponent},
  {path:"add",component:AddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
