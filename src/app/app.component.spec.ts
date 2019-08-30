import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.whenStable().then(() => {
        fixture.detectChanges();
      });
    });
  }));

  describe('Initializing component', () => {
    const title: string = 'pragma-client';

    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it(`should have as title "${title}"`, () => {
      expect(component.title).toEqual(title);
    });
  });
});
