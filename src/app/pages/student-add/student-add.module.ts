import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StudentAddPageRoutingModule } from './student-add-routing.module';

import { StudentAddPage } from './student-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentAddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StudentAddPage]
})
export class StudentAddPageModule {}
