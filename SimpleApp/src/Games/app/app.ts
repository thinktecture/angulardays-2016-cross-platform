import {Component, AfterViewInit} from '@angular/core';
import {IBoardZAppWindow} from './interfaces/boardzAppWindow';

declare var window: IBoardZAppWindow;

@Component({
    moduleId: module.id,
    selector: 'boardz-app',
    templateUrl: 'app.html'
})

export class BoardzAppComponent implements AfterViewInit {
    constructor() {
    }

    public ngAfterViewInit(): any {
        if (window.initAdminLTE) {
            window.initAdminLTE();
        }
    }
}
