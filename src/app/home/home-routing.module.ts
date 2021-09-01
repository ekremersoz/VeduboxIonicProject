import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursePage } from '../pages/course/course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursePage,
  },
  {path:"home" , component:CoursePage}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
