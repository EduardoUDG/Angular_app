import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReturnObsComponent } from './pages/return-obs/return-obs.component';
import { RetryComponent } from './pages/retry/retry.component';
import { MapComponent } from './pages/map/map.component';
import { FilterComponent } from './pages/filter/filter.component';
import { ObservableHomeComponent } from './pages/observable-home/observable-home.component';
import { ObservableComponent } from './pages/observable/observable.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableHomeComponent,
    children: [
      { path: 'observable', component: ObservableComponent },
      { path: 'return-obs', component: ReturnObsComponent },
      { path: 'retry',      component: RetryComponent },
      { path: 'map',        component: MapComponent },
      { path: 'filter',     component: FilterComponent },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
