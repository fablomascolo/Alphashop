import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthappService } from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  canActivate = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean => {

    //throw new Error("Method not implemented");

    //la funzione CanActivate ritornerà il valore del parametro isLogged così come valorizzato dal servizio BasicAuth
    return this.BasicAuth.isLogged();

  }

  //iniettiamo il servizio Authapp (delegato alla autenticazione) nel costruttore del servizio RouteGuard
  //(delegato al controllo delle rotte)
  constructor(private BasicAuth:AuthappService) { }
}
