import { Component, OnInit } from '@angular/core';
import { historique } from 'src/app/models/historique.model';
import { HistoriqueService } from 'src/app/service/historique.service';

@Component({
  selector: 'app-detailhistorique',
  templateUrl: './detailhistorique.component.html',
  styleUrls: ['./detailhistorique.component.scss']
})
export class DetailhistoriqueComponent implements OnInit {

  public historiques : historique[] = [];
  
  settings = {
    columns: {
     
      id_Historique: {
        title: 'id historique',  
      },
      id_Cheval: {
        title: 'Id_Cheval'
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
  constructor(private _service : HistoriqueService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.historiques = data)
  }

}
