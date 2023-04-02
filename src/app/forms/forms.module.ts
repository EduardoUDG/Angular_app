import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { ShowFormComponent } from './pages/show-form/show-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateFormComponent,
    HomeFormComponent,
    ShowFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }
