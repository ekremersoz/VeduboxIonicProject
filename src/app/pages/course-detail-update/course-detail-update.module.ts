import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CourseDetailUpdatePageRoutingModule } from './course-detail-update-routing.module';

import { CourseDetailUpdatePage } from './course-detail-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseDetailUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CourseDetailUpdatePage]
})
export class CourseDetailUpdatePageModule {}
