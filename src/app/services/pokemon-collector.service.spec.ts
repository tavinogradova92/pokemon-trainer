import { TestBed } from '@angular/core/testing';

import { PokemonCollectorService } from './pokemon-collector.service';

describe('PokemonCollectorService', () => {
  let service: PokemonCollectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonCollectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
