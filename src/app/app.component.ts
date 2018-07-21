import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnChanges {

    ngOnInit() {
        console.log('app.component-----onInit');
    }

    ngOnChanges(): void {
        console.log('app-component--------onChanges');
    }
}
