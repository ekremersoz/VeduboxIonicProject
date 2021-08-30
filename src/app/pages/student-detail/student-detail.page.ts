import { Component, OnInit } from '@angular/core';
import { StudentDetail } from 'src/app/modules/studentDetail';
import { StudentDetailService } from 'src/app/services/student-detail.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  studentsOfDetail:StudentDetail[];
  constructor(private studentDetailService:StudentDetailService) { }

  ngOnInit() {
    this.getStudentDetail();
  }


  getStudentDetail(){
    this.studentDetailService.getStudentDetail().subscribe(response =>{
      this.studentsOfDetail = response.data;
    })
  }

}
