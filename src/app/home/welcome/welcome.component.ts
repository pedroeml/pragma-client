import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheckCircle, faCircleNotch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ContainerModel } from '../../container/model/container.model';
import { ContainerService } from '../../container/service/container.service';
import { StepEnum } from '../enum/step.enum';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public faCheckCircle = faCheckCircle;
  public faTimesCircle = faTimesCircle;
  public faCircleNotch = faCircleNotch;
  public step: StepEnum;
  public status: StepEnum;
  public steps = StepEnum;
  public isJumpingToNextStep: boolean;
  public isLoading: boolean;
  public wasFound: boolean;
  public form: FormGroup;

  @Output()
  public containersFound: EventEmitter<ContainerModel[]> = new EventEmitter<ContainerModel[]>();

  constructor(
    private readonly service: ContainerService,
    private readonly formBuilder: FormBuilder) {
    this.isJumpingToNextStep = false;
    this.isLoading = false;
    this.wasFound = false;
  }

  ngOnInit() {
    this.startTransitionCountdown();
    this.form = this.formBuilder.group({
      truckId: ['', [Validators.pattern('^[0-9]*$'), Validators.minLength(1)]]
    });
    this.reactToFormTruckIdValueChange().subscribe();
  }

  private startTransitionCountdown(): void {
    this.step = StepEnum.WELCOMING;

    setTimeout(() => {
      this.isJumpingToNextStep = true;

      setTimeout(() => {
        this.step = StepEnum.TRUCK_ID;
        this.isJumpingToNextStep = false;
      }, 1950);
    }, 2950);
  }

  private reactToFormTruckIdValueChange(): Observable<any[]> {
    return this.form.get('truckId').valueChanges.pipe(
      tap(() => { this.status = StepEnum.LOADING; }),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(search => this.service.getTruckContainers(search)),
      tap(containers => {
        if (!isNullOrUndefined(containers) && containers.length > 0) {
          this.status = StepEnum.SUCCESS;
          console.log('>>> containers', containers);
          this.containersFound.emit(containers);
        } else {
          this.status = StepEnum.FAILURE;
        }
      })
    );
  }
}
