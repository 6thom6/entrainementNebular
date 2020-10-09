import { Component, OnInit } from '@angular/core';
import { employe } from 'src/app/models/employe.model';
import {EmployeService} from 'src/app/service/employe.service';

@Component({
  selector: 'app-detailemploye',
  templateUrl: './detailemploye.component.html',
  styleUrls: ['./detailemploye.component.scss']
})
export class DetailemployeComponent implements OnInit {

  public employes : employe[] = [];

  settings = {
    columns: {
     
      id_Employe: {
        title: 'id Employe',  
      },
      nom_Employe: {
        title: 'nom employe'
      },
      statuts_Employe: {
        title: 'statuts employé'
      },

      date_Embauche: {
        title: 'date de Embauche'
      }
    }
  };

  constructor(private _service : EmployeService) { }

  ngOnInit(): void 
  {
    this._service.get().subscribe(data => this.employes = data)       
  }

}
