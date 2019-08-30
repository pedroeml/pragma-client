import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TemperatureModel } from '../model/temperature.model';
import { SensorRestService } from './sensor-rest.service';

@Injectable()
export class SensorService {
  constructor(private readonly restService: SensorRestService) { }

  public getSensorTemperature(id: string): Observable<TemperatureModel> {
    return this.restService.getSensorTemperature(id).pipe(
      map(temperature => new TemperatureModel(temperature)),
      catchError(() => of(undefined)),
    );
  }

  public getSensorsTemperature(ids: string[]): Observable<TemperatureModel[]> {
    return of(ids).pipe(
        mergeMap(identifiers => forkJoin(identifiers.map(id => this.getSensorTemperature(id)))),
    );
  }
}
