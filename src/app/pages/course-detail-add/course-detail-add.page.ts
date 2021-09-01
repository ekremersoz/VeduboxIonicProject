import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseDetail } from 'src/app/modules/courseDetail';
import { CourseDetailService } from 'src/app/services/course-detail.service';

@Component({
  selector: 'app-course-detail-add',
  templateUrl: './course-detail-add.page.html',
  styleUrls: ['./course-detail-add.page.scss'],
})
export class CourseDetailAddPage implements OnInit {

  courseDetailControl:CourseDetail;
  courseId: number = 0;
  courseDetail:CourseDetail[] = [];
  courseDetailAddForm:FormGroup;

  constructor( private activatedRoute:ActivatedRoute ,private formBuilder:FormBuilder , private courseDetailService:CourseDetailService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
     
      this.getCoutseId(params["courseId"])
      this.createCourseDetailAddForm();
      this.GetCoruseDetailByCourseId(params["courseId"]);
  })
  }



  


  createCourseDetailAddForm(){
    this.courseDetailAddForm = this.formBuilder.group({
      courseId:[Number(this.courseId),Validators.required],
      courseHeader:["",Validators.required],
      courseCurriculum:["",Validators.required],
      courseDescription:["",Validators.required]
    });
  }


  addCourseDetail(){
    if (this.courseDetailControl) {
    }else{
      console.log(this.courseDetailAddForm);
      if(this.courseDetailAddForm.valid)
      {
        let courseModel = Object.assign({},this.courseDetailAddForm.value);
        this.courseDetailService.addCourseDetail(courseModel).subscribe(response=>{
          
        },responseError=>{
          
          
          if(responseError.error.ValidationErrors.length>0){
            console.log(responseError.error.ValidationErrors);
            for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {            
              
            }          
          }
       });
         
      }else{
        
      }
    }
  }

  getCoutseId(courseId: number) {
    this.courseId = courseId;
  }


  GetCoruseDetailByCourseId(courseId: number) {
    this.courseDetailService.GetCoruseDetailByCourseId(courseId).subscribe(response => {
      this.courseDetailControl = response.data;
    })
  }

}
