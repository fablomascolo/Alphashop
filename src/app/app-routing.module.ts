import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path:'',component : LoginComponent},
  {path:'welcome/:userid',component : WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'login',component : LoginComponent},
  {path:'index',component : LoginComponent},
  {path:'articoli',component : ArticoliComponent},
  {path:'navbar',component : NavbarComponent},
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
