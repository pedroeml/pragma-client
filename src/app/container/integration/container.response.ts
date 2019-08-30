import { BeerEnum } from '../enum/beer.enum';
import { TemperatureRangeResponse } from './temperature-range.response';

export interface ContainerResponse {
  id: string;
  beerType: BeerEnum;
  temperatureRange: TemperatureRangeResponse;
}
