import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConfigModule } from '../config/config.module';
import { ContainerModule } from '../container/container.module';
import { MonitorComponent } from './monitor/monitor.component';
import { SensorRoutingModule } from './sensor-routing.module';
import { SensorRestService } from './service/sensor-rest.service';
import { SensorService } from './service/sensor.service';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    MonitorComponent,
    TemperatureComponent
  ],
  imports: [
    CommonModule,
    ConfigModule,
    ContainerModule,
    FontAwesomeModule,
    SensorRoutingModule,
  ],
  providers: [SensorService, SensorRestService],
})
export class SensorModule { }
