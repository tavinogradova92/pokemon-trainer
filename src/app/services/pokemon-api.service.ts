import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  constructor(private http: HttpClient) { }

  public catchPokemons(pockemon: Object): Promise<any> {
    return this.http.post('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200', {
      pockemon
    }).toPromise();
  }
}
