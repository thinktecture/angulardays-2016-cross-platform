import {FormsModule} from '@angular/forms';
import {BoardzAppComponent} from '../app';
import {DashboardComponent} from '../components/dashboard/dashboard';
import {HeaderComponent} from '../components/header/header';
import {SidebarComponent} from '../components/sidebar/sidebar';
import {WidgetComponent} from '../components/widget/widget';
import {BackButtonDirective} from '../directives/backButtonDirective';
import {CloseSidebarOnClickDirective} from '../directives/closeSidebarOnClickDirective';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, XHRBackend, ConnectionBackend} from '@angular/http';
import {APP_ROUTING, appRoutingProviders, GAMES_ROUTING} from '../routing/routingConfig';
import {HashLocationStrategy, LocationStrategy, CommonModule} from '@angular/common';
import {DataService} from '../services/dataService';
import {PlatformInformationService} from '../services/platformInformationService';
import {GameListComponent} from '../components/games/list';
import {GamesRootComponent} from '../components/games/gamesRoot';

export namespace ModuleConfiguration {

    export class App {
        public static declarations = [
            BoardzAppComponent,
            DashboardComponent,
            HeaderComponent,
            SidebarComponent,
            WidgetComponent,
            BackButtonDirective,
            CloseSidebarOnClickDirective
        ];

        public static imports = [
            BrowserModule,
            HttpModule,
            FormsModule,
            APP_ROUTING
        ];

        public static exports = [];

        public static providers = [{ provide: LocationStrategy, useClass: HashLocationStrategy },
            { provide: ConnectionBackend, useClass: XHRBackend },
            DataService,
            PlatformInformationService,
            appRoutingProviders];

        public static bootstraps = [BoardzAppComponent]
    }

    export class Games {
        public static declarations = [GamesRootComponent, GameListComponent];

        public static imports = [CommonModule, FormsModule, GAMES_ROUTING];

        public static exports = [];

        public static providers = [];
    }
}

