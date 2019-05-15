import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ParallelogramComponent} from './parallelogram/parallelogram.component';


const routes: Routes = [{
    path: 'parallelogram',
    component: ParallelogramComponent,
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CssDemoRoutingModule {
}
