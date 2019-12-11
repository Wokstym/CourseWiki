import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowCoursesComponent } from './show-courses/show-courses.component'
import { CourseDetailComponent } from './course-detail/course-detail.component'

const routes: Routes = [
  { path: 'courses', component: ShowCoursesComponent},
  { path: 'course/:id', component: CourseDetailComponent},
  //{path: '', redirectTo: '/courses'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
