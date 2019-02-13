import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-heroes-demo',
    templateUrl: './heroes-demo.component.html',
    styleUrls: ['./heroes-demo.component.scss']
})
export class HeroesDemoComponent implements OnInit {

    title = 'Tour of Heroes';

    constructor() {
    }

    ngOnInit(): void {

    }

}
