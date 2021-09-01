import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailAddPage } from './course-detail-add.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailAddPageRoutingModule {}
