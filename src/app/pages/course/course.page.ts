import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  courses: Course[];


  constructor(private courseService: CourseService, private toastController: ToastController) { }

  ngOnInit() {
    this.getCourses();
  }


  getCourses() {
    this.courseService.getCourse().subscribe(response => {
      this.courses = response.data;
    })
  }

}




