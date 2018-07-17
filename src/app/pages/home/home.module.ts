/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 17-11-27
 * Time: 下午3:23
 * Desc:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent
    ],
    providers: []
})
export class HomeModule {
}
