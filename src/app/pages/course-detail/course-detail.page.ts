import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail } from 'src/app/modules/courseDetail';
import { CourseDetailService } from 'src/app/services/course-detail.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  ionViewDidEnter() {
      this.activatedRoute.params.subscribe(params => {
      this.GetCoruseDetailByCourseId(params["courseId"])
    })
  }

  courseDetail: CourseDetail;

  constructor(private courseDetailService: CourseDetailService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.GetCoruseDetailByCourseId(params["courseId"])
    })
  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.activatedRoute.params.subscribe(params => {
      this.GetCoruseDetailByCourseId(params["courseId"])
    })
  }


  GetCoruseDetailByCourseId(courseId: number) {
    this.courseDetailService.GetCoruseDetailByCourseId(courseId).subscribe(response => {
      this.courseDetail = response.data;
    })
  }

}
