import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proprietairecheval } from '../models/proprietairecheval.model';
import { proprietairesimple } from '../models/proprietairesimple.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService 
{

  constructor(private _http:HttpClient)  { }


}
