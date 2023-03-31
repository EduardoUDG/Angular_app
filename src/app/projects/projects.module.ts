import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { HomeProjectComponent } from './pages/home-project/home-project.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { ShowProjectComponent } from './pages/show-project/show-project.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeProjectComponent,
    CreateProjectComponent,
    ShowProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
