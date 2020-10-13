import { Component, OnInit } from '@angular/core';
import { dropdownlistItem } from 'src/app/models/dropdownlistItem.model';
import { proprietairecheval } from 'src/app/models/proprietairecheval.model';
import { ChevalService } from 'src/app/service/cheval.service';
import { ProprietaireService } from 'src/app/service/proprietaire.service';

@Component({
  selector: 'app-proprietaire',
  templateUrl: './detailproprietaire.component.html',
  styleUrls: ['./detailproprietaire.component.scss']
})
export class DetailproprietaireComponent implements OnInit {

  proprietaires : proprietairecheval[] = []
  private _chevaux : dropdownlistItem[]=[];

  public get chevaux(): dropdownlistItem[] {return this._chevaux;}


  settings ={
    columns : {
      nom_Proprietaire: {
        title: 'proprietaire'
      },
      date_Arrivee: {
        title: 'date_Arrivee'
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

  constructor(private _service : ProprietaireService, private _chevalService : ChevalService) { }

  ngOnInit(): void {
    this._service.get().subscribe(data => this.proprietaires = data )

    this._chevalService.get().subscribe( data =>{ 
      this._chevaux = data.map(function(d) {return {value: d.id_Cheval,title : d.nom_Cheval};});
    this.settings.columns.nom_Cheval.editor.config.list=this.chevaux;
    this.settings = Object.assign({}, this.settings);
    });

  }

}
