import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private _http:HttpClient) { }

  public get(): Observable <Course[]>{
    return this._http.get<Course[]>("https://localhost:5001/api/course");
    
  }
  public post (employee : Course):void{
    this._http.post<Course>("https://localhost:5001/api/course", employee);
  }
}
