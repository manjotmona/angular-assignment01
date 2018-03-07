import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ShowVideosComponent} from './show-videos/show-videos.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}
  , {

    path: 'login',
    component: LoginComponent,

  }, {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'show-videos/:id',
        component: ShowVideosComponent
      }
    ]

  }];
