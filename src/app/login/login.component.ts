import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthappService } from '../services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userid = ''
  password = ''
  autenticato = true
  //consentito = false
  errorMsg = 'Spiacente, la userid o la password sono errati!'
  //infoMsg = 'Accesso Consentito'

  constructor(private route : Router, private BasicAuth: AuthappService ) { }

  ngOnInit() {
  }

  gestAut() {

    if (this.BasicAuth.autentica(this.userid, this.password))
    {
        this.autenticato = true;
        this.route.navigate(['welcome', this.userid])
    }
    else
    {
        this.autenticato = false;
    }

  }
}
