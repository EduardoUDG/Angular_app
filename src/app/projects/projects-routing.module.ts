import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProjectComponent } from './pages/home-project/home-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ShowProjectComponent } from './pages/show-project/show-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeProjectComponent,
    children: [
      { path: 'create', component: CreateProjectComponent },
      { path: 'show',   component: ShowProjectComponent },
      { path: '**',     redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
