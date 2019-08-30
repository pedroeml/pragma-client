import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, Subscription, timer } from 'rxjs';
import { concatMap, switchMap, take, tap } from 'rxjs/operators';
import { ContainerModel } from '../../container/model/container.model';
import { ContainerService } from '../../container/service/container.service';
import { TemperatureModel } from '../model/temperature.model';
import { SensorService } from '../service/sensor.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
})
export class MonitorComponent implements OnInit, OnDestroy {
  public containers: ContainerModel[];
  private ids: string[];
  private polling: Subscription;

  constructor(
    private readonly service: SensorService,
    private readonly containerService: ContainerService,
    private readonly route: ActivatedRoute) {
    this.loadTruckContainers().subscribe();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.polling.unsubscribe();
  }

  private loadTruckContainers(): Observable<TemperatureModel[]> {
    return this.route.params.pipe(
      switchMap((params: ParamMap) => {
        if (params['id']) {
          return this.containerService.getTruckContainers(params['id']);
        } else {
          return of(this.containerService.getStoredContainers());
        }
      }),
      tap(containers => { this.containers = containers; }),
      tap(containers => { this.ids = containers.map(container => container.id); }),
      tap(() => { this.polling = this.pollingContainerTemperatures(this.ids).subscribe(); }),
      switchMap(() => this.loadContainerTemperatures(this.ids).pipe(take(1))),
    );
  }

  private loadContainerTemperatures(ids: string[]): Observable<TemperatureModel[]> {
    return this.service.getSensorsTemperature(ids).pipe(
      tap(temperatures => {
        temperatures.forEach((temp, i) => {
          this.containers[i].currentTemperature = temp.temperature;
        });
      })
    );
  }

  private pollingContainerTemperatures(ids: string[]) {
    return timer(0, 10000).pipe(
      concatMap(() => this.loadContainerTemperatures(ids))
    );
  }
}
