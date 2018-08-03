import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

nome;
password;
message;

  constructor(private authServ: AuthServiceService, 
    private router: Router) { }

  ngOnInit() {
    this.message = '';
  }

  onSignIn(form: NgForm){

    let entrato = this.authServ.logIn(form.value.nome, form.value.password);
    if(entrato){
    this.router.navigate(['/']);
    }
    else{
      this.message = 'Credenziali errate.'
    }
  }

}
