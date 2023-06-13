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
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { NewSkillComponent } from './components/skill/new-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    ModalLoginComponent,
    ContentComponent,
    GoToUpBtnComponent,
    HomeComponent,
    LoginComponent,
    Pagina404Component,
    NewExperienciaComponent,
    ExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    SkillComponent,
    EditSkillComponent,
    NewSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
