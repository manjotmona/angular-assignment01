import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import { ShowVideosComponent } from './show-videos/show-videos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ShowVideosComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
