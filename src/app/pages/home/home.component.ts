import {Component, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None, /*无 Shadow DOM，并且也无样式包装.即取消angular的样式包装机制*/
    providers: []
})
export class HomeComponent {

    // 用户左侧树
    menuData = [{
        id: 1,
        name: '组件示例',
        icon: 'anticon anticon-user',
        isOpen: false,
        children: [
            {
                name: '我的demo',
                link: 'demo/demo',
                selected: false,
            },
            {
                name: '头像组件',
                link: 'demo/avatar-demo',
                selected: false,
            }
        ]
    }, {
        id: 2,
        name: '常用组件库',
        icon: 'anticon anticon-appstore',
        isOpen: false,
        children: []
    }, {
        id: 3,
        name: 'icon库',
        icon: 'anticon anticon-setting',
        isOpen: false,
        children: []
    }];

    isCollapsed = false;
    triggerTemplate = null;
    @ViewChild('trigger')
    customTrigger: TemplateRef<void>;

    /** custom trigger can be TemplateRef **/
    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

}
