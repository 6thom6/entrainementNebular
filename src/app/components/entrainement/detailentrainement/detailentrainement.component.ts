import { Component, OnInit } from '@angular/core';
import { entrainementemployecheval } from 'src/app/models/entrainementemployecheval.model';
import { EntrainementService } from 'src/app/service/entrainement.service';

@Component({
  selector: 'app-detailentrainement',
  templateUrl: './detailentrainement.component.html',
  styleUrls: ['./detailentrainement.component.scss']
})
export class DetailentrainementComponent implements OnInit {

  public entrainements :  entrainementemployecheval [] = [];

  settings = {
    columns: {

      date_Entrainement: {
        title: 'Date entrainement',
      },
      nom_Employe :{
        title : 'cavalier'
      },
      nom_Cheval : {
        title : 'cheval'
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

  constructor(private _service : EntrainementService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => {this.entrainements = data;
    console.log(data)})
  }

}
