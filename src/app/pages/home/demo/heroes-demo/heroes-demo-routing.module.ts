import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesDemoComponent} from './heroes-demo.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routes: Routes = [{
    path: '',
    component: HeroesDemoComponent,
}, {
    path: 'heroes',
    component: HeroesComponent,
}, {
    path: 'dashboard',
    component: DashboardComponent,
}, {
    path: 'detail/:id',
    component: HeroDetailComponent,
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HeroesDemoRoutingModule {
}
