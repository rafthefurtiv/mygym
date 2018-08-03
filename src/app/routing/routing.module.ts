import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedaComponent } from '../scheda/scheda.component';
import { GifComponent } from '../gif/gif.component';
import { ModSchedaComponent } from '../mod-scheda/mod-scheda.component';
import { ListaUtentiComponent } from '../lista-utenti/lista-utenti.component';
import { SigninComponent } from '../auth/signin/signin.component';

const appRoutes: Routes = [
  { path: '', component: GifComponent },
  { path: 'scheda', component: SchedaComponent },
  { path: 'scheda/:ut', component: SchedaComponent },
  { path: 'modScheda', component: ModSchedaComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'signOut', component: SigninComponent },
  { path: 'listaUtenti', component: ListaUtentiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
