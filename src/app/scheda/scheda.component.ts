import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.css']
})
export class SchedaComponent implements OnInit {

  nomel;
  showCerca = true;
  editMode = false;
  esercizi = [];

  nome;
  quantita;
  immagine;
  video;

  @Input() utente: User;
  user;
  
  constructor(private route: ActivatedRoute, private authServ: AuthServiceService) {

    this.user = this.route.snapshot.params['ut'];
    if(this.user != '' && this.user != undefined){
    this.nomel = this.route.snapshot.params['ut'];
    this.onCercaClick();
    }
   }

  ngOnInit() {
    console.log("Scheda component caricata.");

    if(this.authServ.isUser()){
      this.onCercaClick();
    }
  }

  onCercaClick(){ 
    this.showCerca = false;
    // Parte il servizio da implementare.
    this.esercizi = [{"nome":"Panca piana", "quantita":"3x15", "immagine":"http://www.evolutionfit.it/esercizi/immagini/pettorali-aperture-panca-piana-manubri-ag.png", "video":"https://www.youtube.com/watch?v=SaEghg9gBx8"},
    {"nome":"Addominali", "quantita":"3x20", "immagine":"https://i.ebayimg.com/images/g/UQkAAOSwHLNZV7Eo/s-l1600.jpg", "video":"https://www.youtube.com/watch?v=COoIU71NYPI"}
                  ];
  }

  modSchedaClick(){
    this.showCerca = false;
    this.editMode = true;
    // Parte il servizio da implementare.
    this.esercizi = [{"nome":"Panca piana", "quantita":"3x15", "immagine":"http://www.evolutionfit.it/esercizi/immagini/pettorali-aperture-panca-piana-manubri-ag.png", "video":"https://www.youtube.com/watch?v=SaEghg9gBx8"},
    {"nome":"Addominali", "quantita":"3x20", "immagine":"https://i.ebayimg.com/images/g/UQkAAOSwHLNZV7Eo/s-l1600.jpg", "video":"https://www.youtube.com/watch?v=COoIU71NYPI"}
                  ];
  }

  
  eliminaEsercizio(index){
    this.esercizi.splice(index, 1);
  }

  addNewEsercizio(){
    let esercizio = {"nome":this.nome, 
    "quantita":this.quantita, 
    "immagine":this.immagine, 
    "video":this.video};
    this.esercizi[this.esercizi.length] = esercizio;
  }

  salva(){
    console.log("Invocare servizio per il salvataggio");
    console.log(this.utente);
  }


}
