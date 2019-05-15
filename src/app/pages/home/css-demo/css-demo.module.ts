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
import {CssDemoRoutingModule} from './css-demo-routing.module';
import {ParallelogramComponent} from './parallelogram/parallelogram.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CssDemoRoutingModule
    ],
    declarations: [
        ParallelogramComponent,
    ],
    providers: []
})
export class CssDemoModule {
}
