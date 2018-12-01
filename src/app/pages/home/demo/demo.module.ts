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
import {SharedModule} from '../../../shared/shared.module';
import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './my-demo/demo.component';
import {AvatarDemoComponent} from './avatar-demo/avatar-demo.component';
import {ChatDemoComponent} from './chat-demo/chat-demo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DemoRoutingModule
    ],
    declarations: [
        DemoComponent,
        AvatarDemoComponent,
        ChatDemoComponent,
    ],
    providers: []
})
export class DemoModule {
}
