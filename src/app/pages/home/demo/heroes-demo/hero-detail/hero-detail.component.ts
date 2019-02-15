import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit() {
        this.getHero();
    }

    getHero(): void {
        // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。
        // paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。
        // 路由参数总会是字符串。 JavaScript 的 (+) 操作符会把字符串转换成数字，英雄的 id 就是数字类型。
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
