import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CourseDetailAddPageRoutingModule } from './course-detail-add-routing.module';

import { CourseDetailAddPage } from './course-detail-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CourseDetailAddPage]
})
export class CourseDetailAddPageModule {}
