import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'course-add',
    loadChildren: () => import('./pages/course-add/course-add.module').then( m => m.CourseAddPageModule)
  },
  {
    path: 'teacher-add',
    loadChildren: () => import('./pages/teacher-add/teacher-add.module').then( m => m.TeacherAddPageModule)
  },
  {
    path: 'student-add',
    loadChildren: () => import('./pages/student-add/student-add.module').then( m => m.StudentAddPageModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/student/student.module').then( m => m.StudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
