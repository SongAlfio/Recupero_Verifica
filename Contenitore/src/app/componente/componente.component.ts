import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  nome: String[]
  constructor() { 
    this.nome = ['ciao','Buon giorno']
  }

  ngOnInit(): void {
  }

}
