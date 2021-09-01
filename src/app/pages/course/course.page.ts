import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  
  ionViewDidEnter() {
    this.getCourses();
  }
  courses: Course[];


  constructor(private courseService: CourseService , private navControl:NavController) { }

  ngOnInit() {
    this.getCourses();
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.getCourses();
  }


  getCourses() {
    this.courseService.getCourse().subscribe(response => {
      this.courses = response.data;
    })
  }

}




