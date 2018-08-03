import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authServ:AuthServiceService,
  private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    localStorage.removeItem('logged');
    localStorage.removeItem('profilo');
    this.router.navigate(['/']);
  }

}
