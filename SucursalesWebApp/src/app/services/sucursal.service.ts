import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Sucursal } from '../classes/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private _httpClient: HttpClient) { }

  Listar():Observable<any>{
    return this._httpClient.get(environment.SERVICE_URL + 'sucursal');
  }

  ObtenerInfo(id:number):Observable<any>{
    return this._httpClient.get(environment.SERVICE_URL + 'sucursal/' + id.toString());
  }

  Crear(sucursal: Sucursal):Observable<any>{
    return this._httpClient.post(environment.SERVICE_URL + 'sucursal',sucursal);
  }

  Actualizar(sucursal: Sucursal):Observable<any>{
    return this._httpClient.put(environment.SERVICE_URL + 'sucursal/' + sucursal.id.toString(),sucursal);
  }

  Borrar(id: number):Observable<any>{
    return this._httpClient.delete(environment.SERVICE_URL + 'sucursal/' + id.toString());
  }
}
