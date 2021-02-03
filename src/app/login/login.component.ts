import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService} from '../services/authapp.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userid='Fabrizio';
  password='';
  autenticato = true;
  consentito=false;
  errorMsg = 'Spiacente, userid o password sono errati';
  infoMsg='Accesso consentito';

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  gestAut()
  {
    //console.log(this.userid)
    if (this.userid === 'Fabrizio' && this.password === '123_stella')
    {
      this.autenticato = true;
      this.route.navigate(['welcome',this.userid]);
      this.consentito = true;
    }
    else
    {
      this.autenticato = false;
      this.consentito=false;
    }
  }
}
