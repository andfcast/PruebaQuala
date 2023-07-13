import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BasicoService {

  constructor(private _httpClient: HttpClient) { }

  ListarMonedas():Observable<any>{
    return this._httpClient.get(environment.SERVICE_URL + 'basico/ListarMonedas');
  }
}
