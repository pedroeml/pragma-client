import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerModule } from '../../container/container.module';
import { BeerNameEnum } from '../../container/enum/beer-name.enum';
import { BeerEnum } from '../../container/enum/beer.enum';
import { BeerNameFactory } from '../../container/factory/beer-name.factory';
import { ContainerModel } from '../../container/model/container.model';
import { TemperatureRangeModel } from '../../container/model/temperature-range.model';
import { TemperatureComponent } from './temperature.component';

describe('TemperatureComponent', () => {
  let fixture: ComponentFixture<TemperatureComponent>;
  let component: TemperatureComponent;
  let factory: BeerNameFactory;

  const range: TemperatureRangeModel = new TemperatureRangeModel({ minTemperature: 0, maxTemperature: 0 });
  const container: ContainerModel = new ContainerModel({ id: '0', beerType: BeerEnum.PILSNER, temperatureRange: range});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ContainerModule,
        FontAwesomeModule,
      ],
      declarations: [
        TemperatureComponent,
      ],
      providers: [
        BeerNameFactory
      ]
    }).compileComponents().then(() => {
      factory = TestBed.get(BeerNameFactory);

      spyOn(factory, 'create').and.callFake(() => BeerNameEnum.PILSNER);

      fixture = TestBed.createComponent(TemperatureComponent);
      component = fixture.debugElement.componentInstance;
      component.container = container;

      fixture.detectChanges();
    });
  }));

  describe('Initializing component', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should have called create method from BeerNameFactory', () => {
      expect(factory.create).toHaveBeenCalled();
    });
  });
});
