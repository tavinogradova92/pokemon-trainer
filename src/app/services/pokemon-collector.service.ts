import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonCollectorService {

  constructor(private router: Router) { }

  public collectedPokemons: Object[] = [];

  public collectPokemon(pokemon: Pokemon): void {
    if (this.collectedPokemons == []) {
      this.collectedPokemons.push(JSON.parse(localStorage.getItem('collectedPokemons') as string));
      localStorage.setItem('collectedPokemons', JSON.stringify(this.collectedPokemons));
      this.router.navigateByUrl('/dashboard');
    } else {
      this.collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons') as string) || [];
      this.collectedPokemons.push(pokemon);
      localStorage.setItem('collectedPokemons', JSON.stringify(this.collectedPokemons));
      this.router.navigateByUrl('/dashboard');
    }
    
  }
}
