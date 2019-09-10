import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../config/service/config.service';
import { ContainerResponse } from '../integration/container.response';

@Injectable()
export class ContainerRestService {
  constructor(
    private readonly configService: ConfigService,
    private readonly http: HttpClient) { }

  public getTruckContainers(truckId: string): Observable<ContainerResponse[]> {
    return this.http.get<ContainerResponse[]>(`${this.configService.getPragmaServerApiUrl()}/container/${truckId}`);
  }
}
