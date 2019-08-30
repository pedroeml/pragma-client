import { Component, Input, OnInit } from '@angular/core';
import { TemperatureRangeEnum } from '../../container/enum/temperature-range.enum';
import { ContainerModel } from '../../container/model/container.model';
import { BeerNameFactory } from './../../container/factory/beer-name.factory';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent implements OnInit {

  @Input()
  public container: ContainerModel;

  public beerName: string;
  public statusTypes = TemperatureRangeEnum;

  constructor(private readonly factory: BeerNameFactory) { }

  ngOnInit() {
    this.beerName = this.factory.create(this.container.beerType);
  }
}
