import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faCheckCircle, faCircleNotch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
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
  public form: FormGroup;

  constructor(
    private readonly service: ContainerService,
    private readonly formBuilder: FormBuilder) {
    this.isJumpingToNextStep = false;
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
        this.status = !isNullOrUndefined(containers) && containers.length > 0 ? StepEnum.SUCCESS : StepEnum.FAILURE;
      })
    );
  }
}
