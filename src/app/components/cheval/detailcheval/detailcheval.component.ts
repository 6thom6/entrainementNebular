import { Component, OnInit } from '@angular/core';
import { chevalComplet } from 'src/app/models/cheval.model';
import { ChevalService } from 'src/app/service/cheval.service';

@Component({
  selector: 'app-detailcheval',
 templateUrl: './detailcheval.component.html',
  styleUrls: ['./detailcheval.component.scss']
})
export class DetailchevalComponent implements OnInit {


  public chevals : chevalComplet[] = []; 

  settings = {
    columns: {
      id_Cheval: {
        editable: false,
        addable: false,
      },
      nom_Cheval: {
        title: 'cheval',
        
      },
      sexe: {
        title: 'sexe'
      },
      race: {
        title: 'race'
      },
      age: {
        title: 'age'
      },
      pereCheval: {
        title: 'pere du cheval'
      },
      mereCheval: {
        title: 'mere du cheval'
      },
      sortieProvisoire: {
        title: 'sortie provisoire'
      },
      poids: {
        title: 'poids'
      },
      raisonSortie: {
        title: 'raison de sortie'
      },
      id_Proprietaire: {
        title: 'id proprietaire'
      },
      id_Soins: {
        title: 'id Soins'
      }
    }
  };
  //source: LocalDataSource;

  constructor(private _service : ChevalService) {
   // this.source = this._service.getDataSource();
    
   }

 ngOnInit(): void
 {
  this._service.get().subscribe(data => {this.chevals = data;})
 }

}

