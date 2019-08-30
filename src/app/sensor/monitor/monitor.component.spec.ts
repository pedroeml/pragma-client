import { CommonModule } from '@angular/common';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { ContainerModule } from '../../container/container.module';
import { ContainerService } from '../../container/service/container.service';
import { SensorService } from '../service/sensor.service';
import { TemperatureComponent } from '../temperature/temperature.component';
import { MonitorComponent } from './monitor.component';

describe('MonitorComponent', () => {
  let fixture: ComponentFixture<MonitorComponent>;
  let component: MonitorComponent;
  let service: SensorService;
  let containerService: ContainerService;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        ContainerModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
      ],
      declarations: [
        MonitorComponent,
        TemperatureComponent,
      ],
      providers: [
        { provide: SensorService, useClass: class { getSensorsTemperature() { }} },
        { provide: ContainerService, useClass: class { getStoredContainers() { } } },
        { provide: ActivatedRoute, useClass: class { params = of({ id: false }); } }
      ]
    }).compileComponents().then(() => {
      service = TestBed.get(SensorService);
      containerService = TestBed.get(ContainerService);

      spyOn(service, 'getSensorsTemperature').and.returnValue(of([]));
      spyOn(containerService, 'getStoredContainers').and.returnValue([]);

      fixture = TestBed.createComponent(MonitorComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      discardPeriodicTasks();
    });
  }));

  describe('Initializing component', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should have called the getSensorsTemperature method from SensorService', () => {
      expect(service.getSensorsTemperature).toHaveBeenCalled();
    });

    it('should have called the getStoredContainers method from ContainerService', () => {
      expect(containerService.getStoredContainers).toHaveBeenCalled();
    });
  });
});
