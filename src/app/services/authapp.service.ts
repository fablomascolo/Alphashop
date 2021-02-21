import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  // autentica(UserId : string, Password : string) {

  //   if (UserId === 'Fabrizio' && Password === '123_Stella')
  //   {
  //       sessionStorage.setItem("Utente", UserId);
  //       return true;
  //   }
  //   else
  //   {
  //       return false;
  //   }
  // }

  autentica = (UserId : string, Password : string) : boolean => {

    if (UserId === 'Fabrizio' && Password === '123_Stella')
    {
        sessionStorage.setItem("Utente", UserId);
        return true;
    }
    else
    {
        return false;
    }
  }

  loggedUser() {

      let utente = sessionStorage.getItem("Utente");

      return (sessionStorage.getItem("Utente") != null) ? utente : "";
  }

  isLogged() {
    return (sessionStorage.getItem("Utente") != null) ? true : false;
  }

  clearAll() {
    sessionStorage.removeItem("Utente");
  }


}
