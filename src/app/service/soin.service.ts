import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { soins } from '../models/soin.model';


@Injectable({
  providedIn: 'root'
})
export class SoinService {

  
  constructor(private _http:HttpClient) { }

  public get() : Observable <soins[]>
  {
    return this._http.get<soins[]>("https://localhost:5001/api/soins") 
  }
  public post(Soinss : soins) : void 
  {
    this._http.post<soins>("https://localhost:5001/api/soins", Soinss);
  }
    
  }


