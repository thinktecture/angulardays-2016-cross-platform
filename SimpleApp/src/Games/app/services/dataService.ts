import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Game} from '../models/game';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {
    private _games: Game[] =
        [new Game("Monopoly", "A real classic"), new Game("Jumanji", "Also a cool game")];

    constructor() {
    }

    public getGames(): Observable<Game[]> {
        return Observable.of(this._games);
    }

    public getGameCount(): number {
        return this._games.length;
    }

    public getPlayerCount(): number {
        return 7;
    }
}
