import { Component, OnInit } from '@angular/core';
import { proprietairecheval } from 'src/app/models/proprietairecheval.model';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './detailproprietaire.component.html',
  styleUrls: ['./detailproprietaire.component.scss']
})
export class DetailproprietaireComponent implements OnInit {

  proprietaires : proprietairecheval[] = []

  settings ={
    columns : {
      nom_Proprietaire: {
        title: 'proprietaire'
      },
      date_Arrivee: {
        title: 'date_Arrivee'
      },
      nom_Cheval: {
        title: 'Cheval'
      },
      pereCheval: {
        title: 'pere cheval'
      },
      mereCheval: {
        title: 'mere cheval'
      },
      sortieProvisoire: {
        title: 'sortie provisoire'
      },
      raisonSortie: {
        title: 'raison sortie'
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
    }
  }

  constructor(private _service : ProprietaireService) { }

  ngOnInit(): void {
    this._service.get().subscribe(data => this.proprietaires = data )

  }

}
