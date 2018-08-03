import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.component.html',
  styleUrls: ['./esercizio.component.css']
})
export class EsercizioComponent implements OnInit {

  constructor(public nome: string, 
  public quantita:string,
  public immagine:string,
  public video:string
  ) { }

  ngOnInit() {
  }

}
