import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CounterComponent} from './counter/counter.component';


const routes: Routes = [{
    path: 'counter',
    component: CounterComponent,
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgrxDemoRoutingModule {
}
