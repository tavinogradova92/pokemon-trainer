import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  private apiUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private apiLimit: string = '?limit=200';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  public fetchPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiUrl}${this.apiLimit}`)
      .pipe(
        map((res: any) => {
          return res.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            ...this.getIdAndImage(pokemon.url)
          }))
        }),
        tap(_ => this.log('fetched pokemons')),
        catchError(this.handleError<Pokemon[]>('fetchPokemons', []))
      );
  }

  private getIdAndImage(url: string): any {
    const id = url.split( '/' ).filter( Boolean ).pop();
    return {id, 
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`};
  }

  public fetchPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`)
      .pipe(
        tap(_ => this.log(`fetched pokemon id=${id}`)),
        catchError(this.handleError<Pokemon>(`fetchPokemon id=${id}`))
      );
  }

  // Handle Http operation that failed.

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
