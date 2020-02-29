import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { GAMES } from '../models/mock-games';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<Game[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(GAMES);
  }

  getGame(id: number | string) {
    return this.getGames().pipe(
      // (+) before `id` turns the string into a number
      map((games: Game[]) => games.find(game => game.id === +id))
    );
  }



}
