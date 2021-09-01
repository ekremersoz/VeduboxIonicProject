import { Component, OnInit } from '@angular/core';
import { StudentDetail } from 'src/app/modules/studentDetail';
import { StudentDetailService } from 'src/app/services/student-detail.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {


  ionViewDidEnter() {
    this.getStudentDetail(); 
}

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


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.getStudentDetail();
  }

}
