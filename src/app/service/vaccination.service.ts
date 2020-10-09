import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vaccination } from '../models/vaccination.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private _http:HttpClient){}

  public get () : Observable <vaccination[]>
  {
    return this._http.get<vaccination[]>("https://localhost:5001/api/vaccination");
  }
  public post(Vaccinvations : vaccination) : void 
  {
    this._http.post<vaccination>("https://localhost:5001/api/vaccination", Vaccinvations);
  }
}
