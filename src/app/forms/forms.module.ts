import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { ShowFormComponent } from './pages/show-form/show-form.component';


@NgModule({
  declarations: [
    CreateFormComponent,
    HomeFormComponent,
    ShowFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
