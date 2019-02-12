import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-select-demo',
    templateUrl: './select-demo.component.html',
    styleUrls: ['./select-demo.component.scss']
})
export class SelectDemoComponent implements OnInit {

    provinceArr;
    cityArr;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.httpClient.get('assets/areas.json').subscribe(res => {
           console.log(res);
           this.provinceArr = res;
            this.cityArr = this.provinceArr[0]['city'];
        });
    }

    setProvinces() {
        const mySelect1 = document.getElementById('mySelect1');
        const selectedIndex = mySelect1['selectedIndex'];
        this.cityArr = this.provinceArr[selectedIndex]['city'];
    }

    setCities() {
        const value = document.getElementById('mySelect2')['value'];
    }

}
