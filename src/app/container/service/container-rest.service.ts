import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContainerResponse } from '../integration/container.response';

@Injectable()
export class ContainerRestService {
  constructor(private readonly http: HttpClient) { }

  public getTruckContainers(truckId: string): Observable<ContainerResponse[]> {
    return this.http.get<ContainerResponse[]>(`https://pragma-server.herokuapp.com/container/${truckId}`);
  }
}
