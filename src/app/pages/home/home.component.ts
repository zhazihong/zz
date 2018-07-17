import {Component, OnDestroy, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None, /*无 Shadow DOM，并且也无样式包装.即取消angular的样式包装机制*/
    providers: []
})
export class HomeComponent {

    isCollapsed = false;
    triggerTemplate = null;
    @ViewChild('trigger')
    customTrigger: TemplateRef<void>;

    /** custom trigger can be TemplateRef **/
    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

}
