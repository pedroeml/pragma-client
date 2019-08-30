import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { ContainerModule } from '../../container/container.module';
import { ContainerService } from '../../container/service/container.service';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let fixture: ComponentFixture<WelcomeComponent>;
  let component: WelcomeComponent;
  let service: ContainerService;
  let formBuilder: FormBuilder;

  const form: FormGroup = new FormGroup({
    truckId: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.minLength(1)])
  });

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        ContainerModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
      ],
      declarations: [
        WelcomeComponent,
      ],
      providers: [
        { provide: ContainerService, useClass: class { getTruckContainers() { } } },
        { provide: FormBuilder, useClass: class { group() { } } }
      ]
    }).compileComponents().then(() => {
      service = TestBed.get(ContainerService);
      formBuilder = TestBed.get(FormBuilder);

      spyOn(form, 'get').and.callThrough();
      spyOn(formBuilder, 'group').and.returnValue(form);
      spyOn(service, 'getTruckContainers').and.returnValue(of([]));
      spyOn(window, 'setTimeout').and.callFake((f) => { f(); });

      fixture = TestBed.createComponent(WelcomeComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });
  }));

  describe('Initializing component', () => {
    it('should be defined', () => {
      expect(component).toBeDefined();
    });

    it('should have called setTimeout function', () => {
      expect(window.setTimeout).toHaveBeenCalled();
    });

    it('should have called the group method from FormBuilder', () => {
      expect(formBuilder.group).toHaveBeenCalled();
    });

    it('should have called the get method from the FormGroup', () => {
      expect(form.get).toHaveBeenCalled();
    });
  });
});
