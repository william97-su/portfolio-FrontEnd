import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './components/content/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: '**', component: Pagina404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
