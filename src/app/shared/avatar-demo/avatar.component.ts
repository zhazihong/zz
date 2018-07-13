/**
 * 图片显示组件封装 解决image造成的图像变形问题
 */
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnChanges {
    @Input() imageId: any; // string or string[]
    @Input() width: number;
    @Input() height: number = this.width;
    @Input() myRadius: number; // 图片是否有圆角
    @Input() isShowThumbnail: boolean = false; // 显示缩略图
    @Input() canClick: boolean = false; // 默认点击放大
    @Input() defaultImg: string; // 默认头像路径
    // 默认头像男  '../../../assets/img/male-doctor.png'
    // 默认头像女  '../../../assets/img/female-doctor.png';
    // 如果没有传默认头像默认显示LOGO '../../../assets/img/LOGO.png'
    // @Input() isSetDefaultImg: boolean = false; // 默认头像

    src: string[];
    showSrc: string;

    instance: any;

    isArray = false;

    classObject: Object = {};

    constructor() {
    }


    onViewInit(instance) {
        this.instance = instance;
    }


    ngOnChanges(changes: SimpleChanges): void {
        this.setSrc();
    }

    setSrc() {
        this.isArray = Array.isArray(this.imageId);
        if (this.isArray) { // 数组
            if (this.imageId && this.imageId.length > 0) {
                this.imageId.filter((value, index) => {
                    console.log(value, 'imageId');
                    if (value) {
                        if (!this.isShowThumbnail) { // 原图
                            // this.imageId[index] = `${this.appConfig.getRestApiUrl()}${value.split('_')[0]}`;
                            // this.imageId[index] = `${this.appConfig.getFileServer()}${value}`;
                        } else {
                            // this.imageId[index] = `${this.appConfig.getRestApiUrl()}${value.split('_')[1]}`;
                            // this.imageId[index] = `${this.appConfig.getFileServer()}${value}`;
                        }
                        // 通讯录头像全都走聊天服务器
                        if (value.indexOf('/avatar/') > 0) {
                            this.imageId[index] = value;
                        }
                    }
                });
            }
        } else { // string
            if (this.imageId && this.imageId.trim() !== '') {
                if (!this.isShowThumbnail) { // 原图
                    // this.showSrc = `${this.appConfig.getRestApiUrl()}/v1/file/${this.imageId.split('_')[0]}`;
                    // this.showSrc = `${this.appConfig.getFileServer()}${this.imageId}`;
                } else {
                    // this.showSrc = `${this.appConfig.getRestApiUrl()}/v1/file/${this.imageId.split('_')[1]}`;
                    // this.showSrc = `${this.appConfig.getFileServer()}${this.imageId}`;
                }
                // 通讯录头像全都走聊天服务器
                if (this.imageId.indexOf('/avatar/') > 0) {
                    this.showSrc = this.imageId;
                }
            } else {
                this.showSrc = this.defaultImg || '../../../assets/img/LOGO.png';
            }
            this.pictureMatching();
        }
    }

    // 单张图片 按照宽/高 小的适配图片缩放
    pictureMatching() {
        let i = new Image();
        i.src = this.showSrc;
        // 等待图像加载完成  否则获取的naturalWidth = 0
        i.onload = () => {
            // console.log('headImg-width', i.naturalWidth, this.width);
            // console.log('headImg-Height', i.naturalHeight, this.height);
            if (i.naturalHeight > i.naturalWidth) { // 宽小 只设置宽 高度适配
                this.classObject = {
                    'width': this.width + 'px'
                };
            } else { // 高小 只设置高 宽度适配
                this.classObject = {
                    'height': this.height + 'px'
                };
            }
        };
    }

}
