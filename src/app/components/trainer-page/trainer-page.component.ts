import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { PokemonCollectorService } from '../../services/pokemon-collector.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.scss']
})
export class TrainerPageComponent implements OnInit {

  pokemonCollection: [] = [];

  public trainerName = JSON.parse(localStorage.getItem('username')); 

  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private pokemonCollector: PokemonCollectorService
  ) { }

  ngOnInit(): void {
    this.pokemonCollection = JSON.parse(localStorage.getItem('collectedPokemons'));
  }

  logout(): void {
    if (confirm("Are you sure you'd like to log out? It will delete all your data.")) {
      this.authService.isLogedIn = false;
      this.pokemonCollector.collectedPokemons = [];
      localStorage.clear();
      this.router.navigateByUrl('/login');
    } 
  }

}
