import { Component, OnInit } from '@angular/core';
import { PokemonCollectorService } from '../../services/pokemon-collector.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  pokemonCollection: [] = [];

  public trainerName = JSON.parse(localStorage.getItem('username')); 

  constructor(private pokemonCollectorService : PokemonCollectorService) { }

  ngOnInit(): void {
    this.pokemonCollection = JSON.parse(localStorage.getItem('collectedPokemons'));
  }

}
