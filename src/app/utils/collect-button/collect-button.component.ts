import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonCollectorService } from '../../services/pokemon-collector.service';

@Component({
  selector: 'app-collect-button',
  templateUrl: './collect-button.component.html',
  styleUrls: ['./collect-button.component.scss']
})
export class CollectButtonComponent implements OnInit {

  @Input() pokemon: Pokemon = {name: '', url: '', sprites: {front_default: ''}};

  constructor(private pokemonCollectorService: PokemonCollectorService) { }

  ngOnInit(): void {
  }

  collect(pokemon: Pokemon): void {
    this.pokemonCollectorService.collectPokemon(pokemon);
  }

  checkIfCollected(): boolean {
    let collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') as string);
    if (collectedPokemons) {
      for (let i = 0; i < collectedPokemons.length; i++) {
        if (this.pokemon.id == collectedPokemons[i].id) {
          return true;
        } 
      }
    }
    return false;
  }

}
