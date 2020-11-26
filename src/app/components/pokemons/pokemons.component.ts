import { Component, OnInit } from '@angular/core';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService : PokemonAPIService) { }

  ngOnInit(): void {
    this.pokemons = [];
    this.fetchPokemons();
  }

  fetchPokemons(): void {
    this.pokemonService.fetchPokemons()
      .subscribe(data => this.pokemons = data);
  }

}
