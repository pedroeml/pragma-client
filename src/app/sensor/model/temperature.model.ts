import { TemperatureResponse } from '../integration/temperature.response';

export class TemperatureModel {
  public readonly id: string;
  public readonly temperature: number;

  constructor(temperature: TemperatureResponse) {
    this.id = temperature.id;
    this.temperature = temperature.temperature;
  }
}
