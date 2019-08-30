import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ContainerModel } from '../model/container.model';
import { ContainerRestService } from './container-rest.service';

@Injectable()
export class ContainerService {
  constructor(private readonly restService: ContainerRestService) { }

  public getTruckContainers(truckId: string): Observable<ContainerModel[]> {
    if (isNullOrUndefined(truckId) || truckId.length === 0 || isNaN(parseInt(truckId, 10))) {
      return of([]);
    }

    return this.restService.getTruckContainers(truckId).pipe(
      map(containers => containers.map(container => new ContainerModel(container))),
      catchError(() => of([]))
    );
  }
}
