import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { dropdownlistItem } from 'src/app/models/dropdownlistItem.model';
import { ChevalService } from 'src/app/service/cheval.service';
import {CourseService} from 'src/app/service/course.service';

@Component({
  selector: 'app-detailcourse',
  templateUrl: './detailcourse.component.html',
  styleUrls: ['./detailcourse.component.scss']
})
export class DetailcourseComponent implements OnInit {

  public courses : Course[] = [];
  private _chevaux : dropdownlistItem [] = [];

  public get chevaux(): dropdownlistItem [] {return this._chevaux}

  settings = {
    columns: {

      date_Courses: {
        title: 'date de Courses',
      },
      id_Courses : {
        title : 'id course',
      },
      nom_Cheval : {
        title : 'cheval',
        type: 'html',
        editor : {
          type : 'list',
          config : {
            list : this.chevaux
          }
        }
      },
      race: {
        title: 'race'
      },
      age: {
        title: 'age'
      },      
      sexe: {
        title: 'sexe'
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

    },
    actions:{
      add :false
    }
  }

  constructor(private _service : CourseService, private _chevalService : ChevalService) { }

  ngOnInit(): void
  {
    this._service.get().subscribe(data => this.courses = data)   

    this._chevalService.get().subscribe( data =>{ 
      this._chevaux = data.map(function(d) {return {value: d.id_Cheval,title : d.nom_Cheval};});
    this.settings.columns.nom_Cheval.editor.config.list=this.chevaux;
    this.settings = Object.assign({}, this.settings);
    });

  }

}
