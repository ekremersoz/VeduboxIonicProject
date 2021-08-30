import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , FormControl , Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.page.html',
  styleUrls: ['./teacher-add.page.scss'],
})
export class TeacherAddPage implements OnInit {


  teacherAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder , private teacherService:TeacherService) { }

  ngOnInit() {
    this.createCourseAddForm();
  }



  createCourseAddForm(){
    this.teacherAddForm = this.formBuilder.group({
      teacherName:["",Validators.required],
      education:["", Validators.required]
    });


}

addTeacher(){
  if(this.teacherAddForm.valid)
  {
    let teacherModel = Object.assign({},this.teacherAddForm.value);
    this.teacherService.addTeacher(teacherModel).subscribe(response=>{
       
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
