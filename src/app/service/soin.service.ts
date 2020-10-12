import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { chevalsoins } from '../models/chevalsoins.model';


@Injectable({
  providedIn: 'root'
})
export class SoinService {

  
  constructor(private _http:HttpClient) { }

  public get() : Observable <chevalsoins[]>
  {
    return this._http.get<chevalsoins[]>("https://localhost:5001/api/soins") 
  }
  public post(soins : chevalsoins) : void 
  {
    this._http.post<chevalsoins>("https://localhost:5001/api/soins", soins);
  }
    
  }


