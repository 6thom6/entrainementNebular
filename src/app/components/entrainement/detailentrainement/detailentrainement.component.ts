import { Component, OnInit } from '@angular/core';
import { entrainment } from 'src/app/models/entrainement.model';
import { EntrainementService } from 'src/app/service/entrainement.service';

@Component({
  selector: 'app-detailentrainement',
  templateUrl: './detailentrainement.component.html',
  styleUrls: ['./detailentrainement.component.scss']
})
export class DetailentrainementComponent implements OnInit {

  public entrainements : entrainment [] = [];

  settings = {
    columns: {

      date_Entrainement: {
        title: 'Date entrainement',
      },
      id_Entrainement: {
        title: 'Id entrainement'
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
