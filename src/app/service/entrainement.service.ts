import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entrainment } from '../models/entrainement.model';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService 
{

  constructor(private _http:HttpClient) {}
  
public get() : Observable <entrainment[]>
{
  return this._http.get<entrainment[]>("https://localhost:5001/api/entrainement/"); 
}

public post (Entrainements : entrainment): void
{
 this._http.post<entrainment>("https://localhost:5001/api/entrainement/",Entrainements);
}

  
}
