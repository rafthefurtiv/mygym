import { Injectable } from '@angular/core';


export class AuthServiceService {

 signedIn: boolean;

  constructor() {
   }

  logIn(username: string, password: string){
    if(username=='raf'){
    this.signedIn = true;
    localStorage.setItem('logged', 'true');
    localStorage.setItem('profilo', 'admin');
    return true;
    }
    else if(username=='antonio'){
      this.signedIn = true;
      localStorage.setItem('logged', 'true');
      localStorage.setItem('profilo', 'utente');
      return true;
    }
    return false;
  }

  isAuth(){
   return localStorage.getItem('logged');
  }

  isAdmin(){
    return localStorage.getItem('profilo')=='admin';
  }

  isUser(){
    return localStorage.getItem('profilo')=='utente';
  }
}
