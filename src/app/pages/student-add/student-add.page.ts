import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Course } from 'src/app/modules/course';
import { CourseService } from 'src/app/services/course.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.page.html',
  styleUrls: ['./student-add.page.scss'],
})
export class StudentAddPage implements OnInit {
  ionViewDidEnter() {
    this.createStudentAddForm();
    this.getAllCourse();
  
}

  courses:Course[] = [];
  studentAddForm: FormGroup;
  constructor(private courseService:CourseService , private studentService:StudentService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createStudentAddForm();
    this.getAllCourse();
  }

  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
    this.createStudentAddForm();
    this.getAllCourse();
    
  }





  getAllCourse(){
    this.courseService.getCourse().subscribe(response =>{
      this.courses = response.data;
    })
  }


  createStudentAddForm() {
    this.studentAddForm = this.formBuilder.group({
      studentName: ["", Validators.required],
      email: ["", Validators.required],
      courseId: ["", Validators.required]
    });
  }


  addStudent(){
    if(this.studentAddForm.valid)
    {
      let teacherModel = Object.assign({},this.studentAddForm.value);
      this.studentService.addStudent(teacherModel).subscribe(response=>{
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
