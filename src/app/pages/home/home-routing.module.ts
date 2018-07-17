import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
            {path: 'main', loadChildren: './main/main.module#MainModule'},
            {path: '', redirectTo: 'main', pathMatch: 'full'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
