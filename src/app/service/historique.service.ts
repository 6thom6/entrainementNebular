import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChevalHistorique } from '../models/chevalhistorique.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private _http:HttpClient) { }

  public get(): Observable<ChevalHistorique[]>
  {
    return this._http.get<ChevalHistorique[]>("https://localhost:5001/api/historique");
  }
  public post(Historique : ChevalHistorique): void
  {
    this._http.post<ChevalHistorique>("https://localhost:5001/api/historique",Historique);
  }
}
