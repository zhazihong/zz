import {Component} from '@angular/core';

@Component({
    selector: 'app-avatar-demo',
    templateUrl: './avatar-demo.component.html',
    styleUrls: ['./avatar-demo.component.scss']
})
export class AvatarDemoComponent {

    imgArr = [
        {key : 1, name: 'wz1', url: 'assets/img/wz1.jpg'},
        {key : 2, name: 'wz2', url: 'assets/img/wz2.jpg'},
    ];

    constructor() {
    }

}
