import { Component, OnInit } from '@angular/core';
import { vaccination } from 'src/app/models/vaccination.model';
import { VaccinationService } from 'src/app/service/vaccination.service';

@Component({
  selector: 'app-detailvaccination',
  templateUrl: './detailvaccination.component.html',
  styleUrls: ['./detailvaccination.component.scss']
})
export class DetailvaccinationComponent implements OnInit {

  public Vaccinations : vaccination [] = [];

  settings = {
    columns: {
     
      id_Vaccination: {
        title: 'Id_Vaccination',  
      },
      nom_Vaccin: {
        title: 'Nom du Vaccin'
      },
      delai_Indisponibilite: {
        title: 'Delai Indisponibilite'
      }
    }
  };

  constructor(private _service : VaccinationService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.Vaccinations = data)
  }

}
