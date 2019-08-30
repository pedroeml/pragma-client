import { TemperatureRangeResponse } from '../integration/temperature-range.response';

export class TemperatureRangeModel {
  public readonly minTemperature: number;
  public readonly maxTemperature: number;

  constructor(tempRange: TemperatureRangeResponse) {
    this.minTemperature = tempRange.minTemperature;
    this.maxTemperature = tempRange.maxTemperature;
  }
}
