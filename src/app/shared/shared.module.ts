import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AvatarComponent} from './avatar-demo/avatar.component';

// region: third modules
const THIRDMODULES = [
    NgZorroAntdModule,
];

// region: your componets & directives
const COMPONENTS = [
    AvatarComponent,
];

@NgModule({
    imports: [
        CommonModule,
        ...THIRDMODULES,
    ],
    exports: [
        ...THIRDMODULES,
        ...COMPONENTS,
    ],
    declarations: [
        ...COMPONENTS,
    ]
})
export class SharedModule {
}
