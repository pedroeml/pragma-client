import { Injectable } from '@angular/core';
import { BeerNameEnum } from '../enum/beer-name.enum';
import { BeerEnum } from '../enum/beer.enum';

@Injectable()
export class BeerNameFactory {
  public create(beerType: BeerEnum): BeerNameEnum {
    switch (beerType) {
      case BeerEnum.PILSNER:
        return BeerNameEnum.PILSNER;
      case BeerEnum.IPA:
        return BeerNameEnum.IPA;
      case BeerEnum.LAGER:
        return BeerNameEnum.LAGER;
      case BeerEnum.STOUT:
        return BeerNameEnum.STOUT;
      case BeerEnum.WHEAT_BEER:
        return BeerNameEnum.WHEAT_BEER;
      case BeerEnum.PALE_ALE:
        return BeerNameEnum.PALE_ALE;
    }
  }
}
