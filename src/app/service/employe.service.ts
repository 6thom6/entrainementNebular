import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { employe } from '../models/employe.model';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeService 
{

  constructor(private _http : HttpClient ) { }

  public get () : Observable <employe[]>
  {
    return this._http.get<employe []>("https://localhost:5001/api/employe/");
  }
  public post(Employes : employe):void
  {
    this._http.post<employe>("https://localhost:5001/api/employe/",Employes);
  }
  
}
