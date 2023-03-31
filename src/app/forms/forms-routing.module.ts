import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './pages/create-form/create-form.component';
import { HomeFormComponent } from './pages/home-form/home-form.component';
import { ShowFormComponent } from './pages/show-form/show-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFormComponent,
    children: [
      { path: 'create', component: CreateFormComponent },
      { path: 'show',   component: ShowFormComponent },
      { path: '**',     redirectTo:''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
