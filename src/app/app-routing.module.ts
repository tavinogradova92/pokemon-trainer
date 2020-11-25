import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { LogOutGuard } from './guards/auth/logout.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';
import { NotFoundPageComponent } from './error-handling/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LandingPageComponent,
    canActivate: [ LogOutGuard ]
  },
  {
    path: 'dashboard',
    component: TrainerPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'pokemons',
    component: PokemonsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
