import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ContentComponent } from './components/content/content.component';
import { GoToUpBtnComponent } from './components/go-to-up-btn/go-to-up-btn.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    ModalLoginComponent,
    ContentComponent,
    GoToUpBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
