import { Routes } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { PaisesComponent } from './components/paises/paises.component';

export const misRutas: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    // {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'buqueda', component: BuscarComponent},
    {path: 'artista', component: ArtistaComponent},
    {path: 'paises', component: PaisesComponent},
];
