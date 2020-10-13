import { Component, OnInit } from '@angular/core';
import { ChevalHistorique } from 'src/app/models/chevalhistorique.model';
import { HistoriqueService } from 'src/app/service/historique.service';
import { dropdownlistItem } from 'src/app/models/dropdownlistItem.model';
import { ChevalService } from 'src/app/service/cheval.service';


@Component({
  selector: 'app-detailhistorique',
  templateUrl: './detailhistorique.component.html',
  styleUrls: ['./detailhistorique.component.scss']
})
export class DetailhistoriqueComponent implements OnInit {

  public historiques : ChevalHistorique[] = [];
  private _chevaux : dropdownlistItem[]=[];

  public get chevaux(): dropdownlistItem[] {return this._chevaux;}


  
  settings = {
    columns: {
     
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
  constructor(private _service : HistoriqueService, private _chevalService : ChevalService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.historiques = data)

    this._chevalService.get().subscribe( data =>{ 
      this._chevaux = data.map(function(d) {return {value: d.id_Cheval,title : d.nom_Cheval};});
    this.settings.columns.nom_Cheval.editor.config.list=this.chevaux;
    this.settings = Object.assign({}, this.settings);
    });
  }

}
