import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../modules/listResponseModel';
import { Teacher } from '../modules/teacher';
import { apiUrl } from '../modules/WebApi';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  aapiUrl = apiUrl;
  constructor(private httpClient:HttpClient) { }


  getTeacher():Observable<ListResponseModel<Teacher>>{
    return this.httpClient.get<ListResponseModel<Teacher>>(apiUrl+"Teachers/GetAllTeachers");
  }


}
