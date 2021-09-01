import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CourseDetailAddPage } from './pages/course-detail-add/course-detail-add.page';
import { CourseDetailUpdatePage } from './pages/course-detail-update/course-detail-update.page';
import { CourseDetailPage } from './pages/course-detail/course-detail.page';
import { CoursePage } from './pages/course/course.page';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component:CoursePage
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
  {
    path: 'student-detail',
    loadChildren: () => import('./pages/student-detail/student-detail.module').then( m => m.StudentDetailPageModule)
  },
  {
    path: 'course-detail',
    loadChildren: () => import('./pages/course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  },
  {path:"home" , component:CoursePage},
  {path:"course/course-detail" , component:CourseDetailPage},
  {path:"course-detail/GetCoruseDetailByCourseId/:courseId" , component:CourseDetailPage},
  {path:"course-detail-add" , component:CourseDetailAddPage},
  {path:"course-detail-add/GetCoruseDetailByCourseId/:courseId" , component:CourseDetailAddPage},
  {path:"course-detail-update/GetCoruseDetailByCourseId/:courseId" , component:CourseDetailUpdatePage},
  {
    path: 'course-detail-add',
    loadChildren: () => import('./pages/course-detail-add/course-detail-add.module').then( m => m.CourseDetailAddPageModule)
  },
  {
    path: 'course-detail-update',
    loadChildren: () => import('./pages/course-detail-update/course-detail-update.module').then( m => m.CourseDetailUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
