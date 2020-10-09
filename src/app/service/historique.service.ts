import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { historique } from '../models/historique.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private _http:HttpClient) { }

  public get(): Observable<historique[]>
  {
    return this._http.get<historique[]>("https://localhost:5001/api/historique");
  }
  public post(Historique : historique): void
  {
    this._http.post<historique>("https://localhost:5001/api/historique",Historique);
  }
}
