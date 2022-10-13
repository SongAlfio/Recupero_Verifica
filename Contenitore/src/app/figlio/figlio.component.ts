import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit {
  @Input() Nome :String = '';
  cognome: String[]
  constructor() {
    this.cognome = ['ciao','ciao','ciao']
   }

  ngOnInit(): void {
  }

}
