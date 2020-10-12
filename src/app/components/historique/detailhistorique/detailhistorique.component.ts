import { Component, OnInit } from '@angular/core';
import { ChevalHistorique } from 'src/app/models/chevalhistorique.model';
import { HistoriqueService } from 'src/app/service/historique.service';

@Component({
  selector: 'app-detailhistorique',
  templateUrl: './detailhistorique.component.html',
  styleUrls: ['./detailhistorique.component.scss']
})
export class DetailhistoriqueComponent implements OnInit {

  public historiques : ChevalHistorique[] = [];
  
  settings = {
    columns: {
     
      nom_Cheval: {
        title: 'Nom cheval',  
      },
      pere_Cheval: {
        title: 'Pere cheval'
      }, 
      mere_Cheval: {
        title: 'mere cheval'
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
      debourage: {
        title: 'Debourage'
      },
      entraineur_Precedent: {
      title: 'Entraineur Precedent'
      },
      proprietaire_Precedent: {
      title: 'Proprietaire Precedent'
      },

      pre_Entrainement: {
      title: 'Pre_Entrainement'
      },
      elevage: {
        title: 'Elevage'
      }
    }
  };
  constructor(private _service : ChevalHistorique) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.historiques = data)
  }

}
