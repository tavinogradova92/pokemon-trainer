import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonCollectorService {

  constructor(private router: Router) { }

  public collectedPokemons: [] = [];

  public collectPokemon(id: number): void {
    if (this.collectedPokemons == []) {
      this.collectedPokemons.push(JSON.parse(localStorage.getItem('collectedPokemons')));
      localStorage.setItem('collectedPokemons', JSON.stringify(this.collectedPokemons));
      this.router.navigateByUrl('/dashboard');
    } else {
      this.collectedPokemons = JSON.parse(localStorage.getItem('collectedPokemons')) || [];
      this.collectedPokemons.push(id);
      localStorage.setItem('collectedPokemons', JSON.stringify(this.collectedPokemons));
      this.router.navigateByUrl('/dashboard');
    }
    
  }
}
