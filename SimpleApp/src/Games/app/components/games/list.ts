import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Game} from '../../models/game';
import {DataService} from '../../services/dataService';

@Component({
    moduleId: module.id,
    selector: 'game-list',
    templateUrl: 'list.html'
})
export class GameListComponent implements OnInit {
    public games: Game[];

    constructor(private _gamesService: DataService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this._gamesService.getGames()
            .subscribe(
                (games) => this.games = games,
                (err) => console.log('Error while fetching game data')
            );
    }
}
