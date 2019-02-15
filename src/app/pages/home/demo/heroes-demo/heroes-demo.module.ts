/**
 * Created by JetBrains WebStorm.
 * Author: zzh
 * Date: 17-11-27
 * Time: 下午3:23
 * Desc:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../../shared/shared.module';
import {HeroesDemoComponent} from '../heroes-demo/heroes-demo.component';
import {HeroesComponent} from '../heroes-demo/heroes/heroes.component';
import {HeroDetailComponent} from '../heroes-demo/hero-detail/hero-detail.component';
import {MessageComponent} from '../heroes-demo/message/message.component';
import {DashboardComponent} from '../heroes-demo/dashboard/dashboard.component';
import {HeroesDemoRoutingModule} from '../heroes-demo/heroes-demo-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HeroesDemoRoutingModule,
    ],
    declarations: [
        HeroesDemoComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessageComponent,
        DashboardComponent,
    ],
    providers: []
})
export class HeroesDemoModule {
}
