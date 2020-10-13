import { Component, OnInit } from '@angular/core';
import { chevalsoins } from 'src/app/models/chevalsoins.model';
import { dropdownlistItem } from 'src/app/models/dropdownlistItem.model';
import { ChevalService } from 'src/app/service/cheval.service';
import { SoinService } from 'src/app/service/soin.service';

@Component({
  selector: 'app-detailsoin',
  templateUrl: './detailsoin.component.html',
  styleUrls: ['./detailsoin.component.scss']
})
export class DetailsoinComponent implements OnInit {

  public soins : chevalsoins [] = [];
  private _chevaux : dropdownlistItem[]=[];

  public get chevaux(): dropdownlistItem[] {return this._chevaux;}

  settings = {
    columns: {
     // id_Soins: {
     //   title: 'Id_Soins'
     // },
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
     // id_Employe: {
    //  title: 'Id_Employe'
    //},
      alimentation: {
        title: 'Alimentation'
      },
      complement_Alimentation: {
        title: 'Complement Alimentation'
      },
      marechal_Derniere_Visite: {
        title: 'Marechal derniere visite'
      },
      vermifuge: {
        title: 'Vermifuge'
      },
      note_Libre: {
        title: 'Note libre'
      },
      type_De_Soin: {
        title: 'Type de soin'
      },
      durree_Indisponibilite: {
        title: 'Durree indisponibilite'
      },
      date_De_Soin: {
        title: 'Date de soin'
      },

    }
  };
  
  constructor(private _service : SoinService, private _chevalService : ChevalService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.soins = data)       

    this._chevalService.get().subscribe( data =>{ 
      this._chevaux = data.map(function(d) {return {value: d.id_Cheval,title : d.nom_Cheval};});
    this.settings.columns.nom_Cheval.editor.config.list=this.chevaux;
    this.settings = Object.assign({}, this.settings);
    });

  }

}
