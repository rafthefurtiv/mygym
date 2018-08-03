import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ListaUtentiServiceService {

    ut: User[];

  constructor(private req: HttpClient) { }





  getUtenti(){
    let ut3 = this.req.get<User>
    ('http://localhost:8090/mygym/getUtenti', {observe: 'body', responseType: 'json'});
    
    return ut3;
  }
  
  
}
