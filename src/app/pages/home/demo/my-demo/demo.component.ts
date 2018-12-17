import {Component, OnInit} from '@angular/core';
import {NzOptionComponent} from 'ng-zorro-antd';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

    selectedValue: Modal;

    optionList: Modal[];
    searchResult: Modal[];


    filterOption = (input?: string, option?: NzOptionComponent) => {
        console.log(input);
        console.log(option);
        return `${option['name']} ${option['pinyin']}`.includes(input);
    };

    // 本地搜索实现
    onSearch(value: string): void {
        console.log(value);
        if (value) {
            this.searchResult = this.optionList.filter(({name, pinyin}) => `${name} ${pinyin}`.includes(value));
        } else {
            this.searchResult = this.optionList;
        }
        console.log(this.optionList);
    }

    constructor() {
    }

    ngOnInit(): void {
        this.optionList = [
            {
                id: 1,
                name: '青霉素',
                value: '100',
                pinyin: 'qingmeisu|qms|100'
            }, {
                id: 2,
                name: '阿莫西林',
                value: '200',
                pinyin: 'amoxilin|amxl|200'
            }, {
                id: 3,
                name: '止咳糖浆',
                value: '300',
                pinyin: 'zhiketangjiang|zktj|300'
            }, {
                id: 4,
                name: '阿司匹林',
                value: '400',
                pinyin: 'asipilin|aspl|400'
            }
        ];
        this.searchResult = this.optionList;
    }

}

export class Modal {
    id: number;
    name: string;
    value: string;
    pinyin: string;
}
