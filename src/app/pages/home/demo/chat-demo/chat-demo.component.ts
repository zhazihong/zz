import {Component} from '@angular/core';

@Component({
    selector: 'app-chat-demo',
    templateUrl: './chat-demo.component.html',
    styleUrls: ['./chat-demo.component.scss']
})
export class ChatDemoComponent {

    userList = [
        {id: 100,
        name: '网不扣阿斯蒂芬',
        }
    ];


    constructor() {
    }

}
