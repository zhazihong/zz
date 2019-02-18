/**
 * Created by JetBrains WebStorm.
 * Author:zzh
 * Date: 17-11-27
 * Time: 下午3:23
 * Desc:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../shared/shared.module';
import {NgrxDemoRoutingModule} from './ngrx-demo-routing.module';
import {CounterComponent} from './counter/counter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        NgrxDemoRoutingModule
    ],
    declarations: [
        CounterComponent,
    ],
    providers: []
})
export class NgrxDemoModule {
}
