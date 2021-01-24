import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  error = 'Spiacente, la pagina ricercata non esiste!'
  
  constructor() { }

  ngOnInit(): void {
  }

}
