import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() Titolo: string
  @Input() SottoTitolo: string
  @Input() Show: boolean = true
  @Input() LoginShow: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
