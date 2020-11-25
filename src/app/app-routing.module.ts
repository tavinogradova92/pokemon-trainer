import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LandingPageComponent
  },
  {
    path: 'dashboard',
    component: TrainerPageComponent
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
