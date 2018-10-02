import {Routes} from '@angular/router';
import {StartPageComponent} from './start-page.component';

export const StartPageRoutes: Routes = [
  {path: '', component: StartPageComponent, pathMatch: 'full'},
  {
    path: 'start-page', component: StartPageComponent
  }];
