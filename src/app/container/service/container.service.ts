import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
      tap(containers => { localStorage.setItem('containers', JSON.stringify(containers)); }),
      catchError(() => of([]))
    );
  }

  public getStoredContainers(): ContainerModel[] {
    const parsedContainers: any[] = JSON.parse(localStorage.getItem('containers'));

    if (!isNullOrUndefined(parsedContainers)) {
      return parsedContainers.map(container => new ContainerModel(container));
    }

    return [];
  }
}
