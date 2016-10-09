import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/dataService';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    public playerCount: string = '-';
    public gameCount: string = '-';

    constructor(private _dataService: DataService,) {
    }

    public ngOnInit(): any {
        this.playerCount = this._dataService.getPlayerCount().toString();

        this.gameCount  = this._dataService.getGameCount().toString();
    }
}
