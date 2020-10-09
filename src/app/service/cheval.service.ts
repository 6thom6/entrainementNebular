import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { chevalComplet } from '../models/cheval.model';
//import { ServerDataSource } from 'ng2-smart-table';

@Injectable({
  providedIn: 'root'
})
export class ChevalService  
{


  constructor(private _http:HttpClient) {}
  
  public get() :Observable <chevalComplet[]>
  {
    return this._http.get<chevalComplet []>("https://localhost:5001/api/cheval");
  }

  public post(cheval: chevalComplet):void 
  {
    this._http.post<chevalComplet>("https://localhost:5001/api/cheval",cheval);
  }
  


 // public getDataSource() : ServerDataSource{
 //   return new ServerDataSource(this._http, {endPoint : "https://localhost:5001/api/cheval"});
 // }


}
