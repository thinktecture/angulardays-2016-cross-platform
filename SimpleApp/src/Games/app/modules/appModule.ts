import {NgModule} from '@angular/core';
import {GamesModule} from './gamesModule';
import {ModuleConfiguration} from './modulesConfig';

@NgModule({
    imports: [ModuleConfiguration.App.imports, GamesModule],
    exports: ModuleConfiguration.App.exports,
    declarations: ModuleConfiguration.App.declarations,
    providers: ModuleConfiguration.App.providers,
    bootstrap: ModuleConfiguration.App.bootstraps
})
export class AppModule {

}
