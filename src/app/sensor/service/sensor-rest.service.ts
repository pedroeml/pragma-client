import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/service/config.service';
import { TemperatureResponse } from '../integration/temperature.response';

@Injectable()
export class SensorRestService {
  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpClient) { }

  public getSensorTemperature(id: string): Observable<TemperatureResponse> {
    return this.http.get<TemperatureResponse>(`${this.configService.getPragmaServerApiUrl()}/sensor/${id}`);
  }
}
