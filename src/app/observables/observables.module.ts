import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ReturnObsComponent } from './pages/return-obs/return-obs.component';
import { RetryComponent } from './pages/retry/retry.component';
import { MapComponent } from './pages/map/map.component';
import { FilterComponent } from './pages/filter/filter.component';
import { ObservableHomeComponent } from './pages/observable-home/observable-home.component';
import { ObservableComponent } from './pages/observable/observable.component';


@NgModule({
  declarations: [
    ObservableHomeComponent,
    ReturnObsComponent,
    RetryComponent,
    MapComponent,
    FilterComponent,
    ObservableComponent,
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
