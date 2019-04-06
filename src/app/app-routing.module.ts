import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
export const APP_ROUTES = [
    {
        path: '',
        component: HomeComponent,
    },
];
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {
        // preload all modules; optionally we could
        // implement a custom preloading strategy for just some
        // of the modules (PRs welcome 😉)
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
