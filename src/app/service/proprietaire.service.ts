import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proprietairecheval } from '../models/proprietairecheval.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService 
{
  
  constructor(private _http:HttpClient)  { }

  public get(): Observable <proprietairecheval[]>
  {
    return this._http.get<proprietairecheval[]>("https://localhost:5001/api/proprietaire")
  }
  public post(proprietaires : proprietairecheval) : void 
  {
    this._http.post<proprietairecheval>("https://localhost:5001/api/proprietaire", proprietaires);
  }


}
