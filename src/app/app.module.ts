import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// importando rutas
import { RouterModule } from '@angular/router';
import { misRutas } from './app.routes';
// imporat modulo para hacer peticiones http
import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './components/paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    ArtistaComponent,
    NavbarComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas, {useHash: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
