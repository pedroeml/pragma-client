import { NgModule } from '@angular/core';
import { ConfigModule } from '../config/config.module';
import { BeerNameFactory } from './factory/beer-name.factory';
import { ContainerRestService } from './service/container-rest.service';
import { ContainerService } from './service/container.service';

@NgModule({
  declarations: [],
  imports: [ConfigModule],
  providers: [ContainerService, ContainerRestService, BeerNameFactory],
})
export class ContainerModule { }
