import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {

  constructor() { }

  autentica(UserId : string, Password : string) {

    if (UserId === 'Nicola' && Password === '123_Stella')
    {
      return true;
    }
    else
    {
      return false;
    }

  }
}
