import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailUpdatePage } from './course-detail-update.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDetailUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDetailUpdatePageRoutingModule {}
