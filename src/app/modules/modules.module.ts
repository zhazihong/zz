import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// 自定义组件
import {AvatarDemoComponent} from './avatar/avatar-demo.component'; // 头像

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AvatarDemoComponent
    ],
    exports: [
        AvatarDemoComponent
    ]
})
export class ModulesModule {
}
