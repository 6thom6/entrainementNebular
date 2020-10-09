import { Component, OnInit } from '@angular/core';
import { soins } from 'src/app/models/soin.model';
import { SoinService } from 'src/app/service/soin.service';

@Component({
  selector: 'app-detailsoin',
  templateUrl: './detailsoin.component.html',
  styleUrls: ['./detailsoin.component.scss']
})
export class DetailsoinComponent implements OnInit {

  public Soinss : soins [] = [];

  settings = {
    columns: {
      id_Soins: {
        title: 'Id_Soins'
      },
      id_Cheval: {
        title: 'Id_Cheval',
        
      },
      id_Employe: {
        title: 'Id_Employe'
      },
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
  
  constructor(private _service : SoinService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.Soinss = data)       

  }

}
