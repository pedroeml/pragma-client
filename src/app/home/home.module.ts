import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContainerModule } from '../container/container.module';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    ContainerModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
  providers: [],
})
export class HomeModule { }
