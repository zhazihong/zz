import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DemoComponent} from './my-demo/demo.component';
import {AvatarDemoComponent} from './avatar-demo/avatar-demo.component';
import {ChatDemoComponent} from './chat-demo/chat-demo.component';
import {SelectDemoComponent} from './select-demo/select-demo.component';

const routes: Routes = [{
    path: 'demo',
    component: DemoComponent,
}, {
    path: 'avatar-demo',
    component: AvatarDemoComponent,
}, {
    path: 'chat-demo',
    component: ChatDemoComponent,
}, {
    path: 'select-demo',
    component: SelectDemoComponent,
}, {
    path: 'heroes-demo',
    loadChildren: './heroes-demo/heroes-demo.module#HeroesDemoModule',
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DemoRoutingModule {
}
