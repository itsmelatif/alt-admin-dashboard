import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMaps, IMapsSearch } from '../interfaces/maps-interface';
import { EndpointConstant } from '../constant/endpoint-constant';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(
    private _http: HttpClient
  ) { }


  getNearestGas(
    payload: IMapsSearch
  ): Observable<IMaps>{
    const params = new HttpParams()
    .set('keyword', payload.keyword!)
    .set('radius', payload.radius)
    .set('type', payload.type)
    .set('key', environment.googleMapApiKey);

    return this._http.get<IMaps>(`${EndpointConstant.mapSearch}location=${payload.lat}%2C${payload.lng}`, {params: params});
  }
}
