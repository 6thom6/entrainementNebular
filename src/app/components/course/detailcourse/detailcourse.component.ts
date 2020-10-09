import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import {CourseService} from 'src/app/service/course.service';

@Component({
  selector: 'app-detailcourse',
  templateUrl: './detailcourse.component.html',
  styleUrls: ['./detailcourse.component.scss']
})
export class DetailcourseComponent implements OnInit {

  public courses : Course[] = [];

  settings = {
    columns: {

      date_Courses: {
        title: 'date de Courses',
      },
      distance: {
        title: 'distance'
      },
      jockey: {
        title: 'jockey'
      },
      poids_De_Course: {
        title: 'poids de course'
      },
      hippodrome: {
        title: 'hippodrome'
      },
      corde: {
        title: 'corde'
      },
      discipline: {
        title: 'discipline'
      },
      terrain: {
        title: 'terrain'
      },
      avis: {
        title: 'avis'
      },

    }
  }

  constructor(private _service : CourseService) { }

  ngOnInit(): void
  {
    this._service.get().subscribe(data => this.courses = data)       

  }

}
