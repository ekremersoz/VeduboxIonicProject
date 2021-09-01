import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail } from 'src/app/modules/courseDetail';
import { CourseDetailService } from 'src/app/services/course-detail.service';

@Component({
  selector: 'app-course-detail-update',
  templateUrl: './course-detail-update.page.html',
  styleUrls: ['./course-detail-update.page.scss'],
})
export class CourseDetailUpdatePage implements OnInit {

  courseDetailControl:CourseDetail;
  courseDetail:CourseDetail;
  courseId:number;
  courseHeader:string;
  courseCurriculum:string;
  courseDescription:string;
  courseDetailUpdateForm:FormGroup;


  constructor(private activatedRoute:ActivatedRoute ,private formBuilder:FormBuilder , private courseDetailService:CourseDetailService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
     
      this.GetCoruseDetailByCourseId(params["courseId"])
      this.createCourseDetailUpdateForm();
      this.GetCoruseDetailByCourseIdForControl(params["courseId"])
  })

  }

  createCourseDetailUpdateForm(){
    this.courseDetailUpdateForm = this.formBuilder.group({
      courseId:["",Validators.required],
      courseHeader:["",Validators.required],
      courseCurriculum:["",Validators.required],
      courseDescription:["",Validators.required]
    });
  }


  updateCourseDetail(){
    if (this.courseDetailControl) {
      console.log(this.courseDetailUpdateForm);
    if(this.courseDetailUpdateForm.valid)
    {
      let courseModel = Object.assign({},this.courseDetailUpdateForm.value);
      this.courseDetailService.updateCourseDetail(courseModel).subscribe(response=>{
         
      },responseError=>{
        
        
        if(responseError.error.ValidationErrors.length>0){
          console.log(responseError.error.ValidationErrors);
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {            
            
          }          
        }
     });
       
    }else{
       
    }
    }else{
      
    }
    
    
  }


  GetCoruseDetailByCourseId(courseId: number) {
    this.courseDetailService.GetCoruseDetailByCourseId(courseId).subscribe(response => {
      this.courseDetail = response.data;
      this.courseId = this.courseDetail.courseId;
      this.courseCurriculum = this.courseDetail.courseCurriculum;
      this.courseHeader = this.courseDetail.courseHeader;
      this.courseDescription = this.courseDetail.courseDescription;
    })
  }

  GetCoruseDetailByCourseIdForControl(courseId: number) {
    this.courseDetailService.GetCoruseDetailByCourseId(courseId).subscribe(response => {
      this.courseDetailControl = response.data;
    })
  }


}
