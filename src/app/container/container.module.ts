import { NgModule } from '@angular/core';
import { BeerNameFactory } from './factory/beer-name.factory';
import { ContainerRestService } from './service/container-rest.service';
import { ContainerService } from './service/container.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [ContainerService, ContainerRestService, BeerNameFactory],
})
export class ContainerModule { }
