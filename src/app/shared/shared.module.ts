import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AvatarComponent} from './avatar-demo/avatar.component';
import {MultipleChoiceComponent} from './multiple-choice/multiple-choice.component';
import {ChangePointModule} from './change-point/change-point.module';

// region: third modules
const THIRDMODULES = [
    NgZorroAntdModule,
    ChangePointModule,
];

// region: your componets & directives
const COMPONENTS = [
    AvatarComponent,
    MultipleChoiceComponent,
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
