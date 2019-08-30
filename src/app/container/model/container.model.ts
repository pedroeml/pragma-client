import { BeerEnum } from '../enum/beer.enum';
import { TemperatureRangeEnum } from '../enum/temperature-range.enum';
import { ContainerResponse } from '../integration/container.response';
import { TemperatureRangeModel } from './temperature-range.model';

export class ContainerModel {
  public readonly id: string;
  public readonly beerType: BeerEnum;
  public readonly temperatureRange: TemperatureRangeModel;
  public currentTemperatureStatus: TemperatureRangeEnum;
  private temperature: number;

  constructor(container: ContainerResponse) {
    this.id = container.id;
    this.beerType = container.beerType;
    this.temperatureRange = new TemperatureRangeModel(container.temperatureRange);
  }

  get currentTemperature(): number {
    return this.temperature;
  }

  set currentTemperature(temp: number) {
    this.temperature = temp;
    this.updateTemperatureStatus();
  }

  private updateTemperatureStatus(): void {
    if (this.isTemperatureBelowRange()) {
      this.currentTemperatureStatus = TemperatureRangeEnum.BELOW;
    } else if (this.isTemperatureAboveRange()) {
      this.currentTemperatureStatus = TemperatureRangeEnum.ABOVE;
    } else {
      this.currentTemperatureStatus = TemperatureRangeEnum.INSIDE;
    }
  }

  private isTemperatureAboveRange(): boolean {
    return this.currentTemperature > this.temperatureRange.maxTemperature;
  }

  private isTemperatureBelowRange(): boolean {
    return this.currentTemperature < this.temperatureRange.minTemperature;
  }
}
