import {NgModule} from '@angular/core';
import {ModuleConfiguration} from './modulesConfig';

@NgModule({
    imports: [ModuleConfiguration.Games.imports],
    exports: ModuleConfiguration.Games.exports,
    declarations: ModuleConfiguration.Games.declarations,
    providers: ModuleConfiguration.Games.providers
})
export class GamesModule {

}
