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
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MainRoutingModule
    ],
    declarations: [
        MainComponent
    ],
    providers: []
})
export class MainModule {
}
