import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { ContributeComponent } from 'src/app/pages/contribute/contribute.component';
import { WebDevComponent } from 'src/app/pages/web-dev/web-dev.component';
import { AppsComponent } from './pages/apps/apps.component';
import { VisualizersComponent } from './pages/visualizers/visualizers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'web-dev'
  },
  {
    path: 'contribute',
    component: ContributeComponent,
    data: {
      animation: 'contribute'
    }
  },
  {
    path: 'web-dev',
    component: WebDevComponent,
    data: {
      animation: 'web-dev'
    }
  },
  {
    path: 'apps',
    component: AppsComponent,
    data: {
      animation: 'apps'
    }
  },
  {
    path: 'visualizers',
    component: VisualizersComponent,
    data: {
      animation: 'visualizers'
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      animation: 'settings'
    }
  },
  {
    path: "**",
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
