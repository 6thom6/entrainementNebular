import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { entrainementemployecheval } from '../models/entrainementemployecheval.model';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService 
{

  constructor(private _http:HttpClient) {}
  
public get() : Observable <entrainementemployecheval[]>
{
  return this._http.get<entrainementemployecheval[]>("https://localhost:5001/api/entrainement/"); 
}

public post (Entrainements : entrainementemployecheval): void
{
 this._http.post<entrainementemployecheval>("https://localhost:5001/api/entrainement/",Entrainements);
}

  
}
