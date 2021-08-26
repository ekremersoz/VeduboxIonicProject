import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Course } from '../modules/course';
import { ListResponseModel } from '../modules/listResponseModel';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = apiUrl;

  constructor(private httpClient:HttpClient) { }


  getCourse():Observable<ListResponseModel<Course>>{
    let newPath = apiUrl+"Courses/GetAllCourse";
    return this.httpClient.get<ListResponseModel<Course>>(newPath);
  }




}
