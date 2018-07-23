import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {AppConfig} from '../../app.config';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None, /*无 Shadow DOM，并且也无样式包装.即取消angular的样式包装机制*/
    providers: []
})
export class HomeComponent implements OnInit {

    // 用户左侧树
    menuData;

    isCollapsed = false;
    triggerTemplate = null;
    @ViewChild('trigger')
    customTrigger: TemplateRef<void>;

    constructor(private appConfig: AppConfig) {

    }

    ngOnInit() {
        console.log('home.component-----onInit');
        // this.menuData = this.appConfig.getMenuData();
        // 每次刷新页面后 保证左侧树节点依旧选中之前的
        this.activeNode();
    }

    // 选中当前树节点
    activeNode() {
        const url = window.location.href;
        const nodeArr = url.split('/');
        if (url && nodeArr.length) {
            const curNode = nodeArr[nodeArr.length - 1];
            // 在树中找到该节点 选中并展示
            const menuData = this.appConfig.getMenuData();
            menuData.forEach((tab) => {
                if (tab && tab.children) {
                    tab.children.forEach((node) => {
                        if (curNode === node.link) {
                            node.selected = true;
                            tab.isOpen = true;
                        } else {
                            node.selected = false;
                        }
                    });
                }
            });
            this.menuData = menuData;
        }
    }

    // 点击当前 tab 页
    openChange(id: number) {
        this.menuData.forEach((node) => {
            if (id !== node.id) {
                node.isOpen = false;
                if (node.children) {
                    node.children.forEach((item) => {
                        item.selected = false;
                    });
                }
            }
        });
    }

}
