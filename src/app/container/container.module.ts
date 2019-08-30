import { NgModule } from '@angular/core';
import { ContainerRestService } from './service/container-rest.service';
import { ContainerService } from './service/container.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [ContainerService, ContainerRestService],
})
export class ContainerModule { }
