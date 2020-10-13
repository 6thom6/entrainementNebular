import { Component, OnInit } from '@angular/core';
import { chevalComplet } from 'src/app/models/cheval.model';
import { dropdownlistItem } from 'src/app/models/dropdownlistItem.model';
import { employe } from 'src/app/models/employe.model';
import { entrainementemployecheval } from 'src/app/models/entrainementemployecheval.model';
import { ChevalService } from 'src/app/service/cheval.service';
import { EmployeService } from 'src/app/service/employe.service';
import { EntrainementService } from 'src/app/service/entrainement.service';

@Component({
  selector: 'app-detailentrainement',
  templateUrl: './detailentrainement.component.html',
  styleUrls: ['./detailentrainement.component.scss']
})
export class DetailentrainementComponent implements OnInit {

  public entrainements :  entrainementemployecheval [] = [];
  private _chevaux : dropdownlistItem[]=[];
  private _employe : dropdownlistItem [] = [];

  public get employe(): dropdownlistItem[] {return this._employe;}
  public get chevaux(): dropdownlistItem[] {return this._chevaux;}

  settings = {
    columns: {

      date_Entrainement: {
        title: 'Date entrainement',
      },
      nom_Employe :{

        title : 'cavalier',
        type: 'html',
        editor : {
          type : 'list',
          config : {
            list : this.employe
          }
        }
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
      plat: {
        title: 'Plat'
      },
      obstacle: {
        title: 'Obstacle'
      },
      marcheur: {
        title: 'Marcheur'
      },
      pre: {
        title: 'Pre'
      },
      duree: {
        title: 'Duree'
      }

    }
  }

  constructor(private _service : EntrainementService, private _chevalService : ChevalService, private _employeService : EmployeService ) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => {this.entrainements = data;
    
    console.log(data)})

    this._chevalService.get().subscribe( data =>{ 
      this._chevaux = data.map(function(d) {return {value: d.id_Cheval,title : d.nom_Cheval};});
    this.settings.columns.nom_Cheval.editor.config.list=this.chevaux;
    this.settings = Object.assign({}, this.settings);
    });
    this._employeService.get().subscribe(data =>{
      this._employe = data.map(function(d) {return {value: d.id_Employe,title : d.nom_Employe};});
      this.settings.columns.nom_Employe.editor.config.list=this.employe;
      this.settings = Object.assign({}, this.settings);
    });

  }

}
