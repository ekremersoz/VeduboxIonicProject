import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl , ReactiveFormsModule } from '@angular/forms';
import { Teacher } from 'src/app/modules/teacher';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.page.html',
  styleUrls: ['./course-add.page.scss'],
})
export class CourseAddPage implements OnInit {

  ionViewDidEnter() {
    this.createCourseAddForm();
    this.getTeachers();
  }

  teachers:Teacher[]= [];
  courseAddForm:FormGroup;
  

  constructor(private courseService:CourseService , private formBuilder:FormBuilder , private teacherService : TeacherService , private toastController: ToastController) { }

  


  ngOnInit() {

    this.createCourseAddForm();
    this.getTeachers();
  
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.createCourseAddForm();
    this.getTeachers();
  }
 
  createCourseAddForm(){
    this.courseAddForm = this.formBuilder.group({
      teacherId:["",Validators.required],
      courseName:["", Validators.required],
      fee:["",Validators.required],
      startDate:["",Validators.required],
      finishDate:["",Validators.required]
    });
  }


  addCourse(){
    console.log(this.courseAddForm);
    if(this.courseAddForm.valid)
    {
      let courseModel = Object.assign({},this.courseAddForm.value);
      this.courseService.addCourse(courseModel).subscribe(response=>{
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

  getTeachers(){
    this.teacherService.getTeacher().subscribe(response =>{
      this.teachers = response.data;
      console.log(this.teachers);
    })
  }


}
