import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component : WelcomeComponent},
  {path:'welcome/:userid',component : WelcomeComponent},
  {path:'login',component : LoginComponent},
  {path:'articoli',component : ArticoliComponent},
  {path:'navbar',component : NavbarComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
