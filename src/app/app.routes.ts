import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {MarvelComponent} from "./components/marvel/marvel.component";
import {DetallesComponent} from "./components/detalles/detalles.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'marvel',
    component: MarvelComponent,
  },
  {
    path: 'detalles',
    component: DetallesComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  }
];
