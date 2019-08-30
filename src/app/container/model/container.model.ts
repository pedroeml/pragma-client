import { BeerEnum } from '../enum/beer.enum';
import { ContainerResponse } from '../integration/container.response';
import { TemperatureRangeModel } from './temperature-range.model';

export class ContainerModel {
  public readonly id: string;
  public readonly beerType: BeerEnum;
  public readonly temperatureRange: TemperatureRangeModel;

  constructor(container: ContainerResponse) {
    this.id = container.id;
    this.beerType = container.beerType;
    this.temperatureRange = new TemperatureRangeModel(container.temperatureRange);
  }
}
