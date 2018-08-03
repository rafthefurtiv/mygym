import { Component, OnInit, Input } from '@angular/core';
import { ListaUtentiServiceService } from '../lista-utenti-service.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent implements OnInit {

  allUtenti;
  utenti;
  ricerca;
  utente: string;

  constructor(private listaUtentiService: ListaUtentiServiceService) { }

  ngOnInit() {
    this.utenti = ['Raffaele Barbato', 'Giacomo Como', 'Alfredo Ottieri'];

    let utentiFromBackEnd = this.listaUtentiService.getUtenti();

    utentiFromBackEnd.subscribe(
      (response) => {
        this.utenti = response;
        this.allUtenti = response;
      },
      (error) => {console.log(error); console.log("err");}
    );
    //this.utenti = utentiFromBackEnd;

    console.log("Lista: " + utentiFromBackEnd);

  }


  cerca(){
    this.utenti = [];
    this.allUtenti.forEach(element => {
      if(element.fullName.toString().indexOf(this.ricerca) >= 0){
        this.utenti.push(element);
        }
    });
  }

}
