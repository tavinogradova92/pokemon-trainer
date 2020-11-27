import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { PokemonDescriptionComponent } from './components/pokemon-description/pokemon-description.component';
import { NotFoundPageComponent } from './error-handling/not-found-page/not-found-page.component';
import { CollectButtonComponent } from './utils/collect-button/collect-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TrainerPageComponent,
    PokemonsComponent,
    PokemonDescriptionComponent,
    NotFoundPageComponent,
    CollectButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
