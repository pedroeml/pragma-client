import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureResponse } from './../integration/temperature.response';

@Injectable()
export class SensorRestService {
  constructor(private readonly http: HttpClient) { }

  public getSensorTemperature(id: string): Observable<TemperatureResponse> {
    return this.http.get<TemperatureResponse>(`https://pragma-server.herokuapp.com/sensor/${id}`);
  }
}
