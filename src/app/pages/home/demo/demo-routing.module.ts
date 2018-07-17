import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DemoComponent} from './my-demo/demo.component';
import {AvatarDemoComponent} from './avatar-demo/avatar-demo.component';


const routes: Routes = [{
    path: 'demo',
    component: DemoComponent,
}, {
    path: 'avatar-demo',
    component: AvatarDemoComponent
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemoRoutingModule {
}
