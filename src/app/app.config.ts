import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';

export function configProvider(cfg: AppConfig) {
    console.log('configProvider------------------------' + cfg);
    return () => cfg.load();
}

@Injectable()
export class AppConfig {

    private authState: string;
    private userData: Object = null;
    private authObj: AuthObj = new AuthObj();
    private _config: any = null;

    // 左侧树信息
    private menuData: Array<any> = [];

    constructor(private http: HttpClient) {
        console.log('app-config--------constructor');
        this.setMenuData();
    }

    // 获取认证状态
    public getAuthState() {
        return this.authState;
    }

    // 获取用户对象
    public getAuthObj(): AuthObj {
        return this.authObj;
    }


    public getuserData() {
        return this.userData;
    }

    // 获取左侧树数据
    getMenuData() {
        return this.menuData;
    }

    // 设置左侧树数据
    setMenuData() {
        this.menuData = [
            {
                id: 1,
                name: '组件示例',
                icon: 'anticon anticon-user',
                isOpen: false,
                children: [
                    {
                        name: '我的demo',
                        link: 'demo',
                        selected: false,
                    },
                    {
                        name: '头像组件',
                        link: 'avatar-demo',
                        selected: false,
                    },
                    {
                        name: '聊天demo',
                        link: 'chat-demo',
                        selected: false,
                    },
                    {
                        name: '选择器demo',
                        link: 'select-demo',
                        selected: false,
                    },
                    {
                        name: '英雄列表',
                        link: 'heroes-demo',
                        selected: false,
                    }
                ]
            }, {
                id: 2,
                name: '常用组件库',
                icon: 'anticon anticon-appstore',
                isOpen: false,
                children: []
            }, {
                id: 3,
                name: 'icon库',
                icon: 'anticon anticon-setting',
                isOpen: false,
                children: []
            }, {
                id: 4,
                name: '动画',
                icon: 'anticon anticon-setting',
                isOpen: false,
                children: []
            }];
    }

    public getDevMode() {
        return this.getConfigByKey('devmode');
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('assets/config.json')
                .pipe(map(data => data), catchError(
                    (error: any): any => {
                        console.log('configuration file config-y.json could not be read');
                        resolve(false);
                        return Observable.throw(error.json().error || 'Server error');
                    }
                ))
                .subscribe((response) => {
                    this._config = response;
                    if (this.getDevMode() === true) {
                        // this.loginForDev(resolve, reject);
                    } else {
                        // this.getCurrentUser(resolve, reject);
                    }
                });
        });
    }

    //
    // private getCurrentUser(resolve, reject) {
    //     console.log('getCurrentUser() request-log----');
    //     this.http.get('/currentUser').map(res => res.json()).catch((error: any): any => {
    //         console.log('getCurrentUser() failed:' + error.json().error);
    //         resolve(-1);
    //     }).subscribe((res: any) => {
    //         console.log('getCurrentUser', res);
    //         if (!res.success || res.code !== '0') {
    //             console.log('getCurrentUser()--errorRet:' + res.message);
    //             this.toastService.error(res.message);
    //         } else {
    //             this.setToken(res.data.token);
    //             this.setUserInfo(res.data.userInfo);
    //             this.setModuleTree(res.data.moduleTree);
    //             this.setResource(res.data.resources);
    //         }
    //         resolve(res.code);
    //     });
    // }
    //
    // private loginForDev(resolve, reject) {
    //     const body = {
    //         username: this.getConfigByKey('dev_user').username,
    //         password: this.getConfigByKey('dev_user').password,
    //         // loginType: 2
    //     };
    //     const url = this.getRestApiUrl() + this.loginUrl;
    //     this.http.post(url, body)
    //         .map(res => res.json())
    //         .catch((error: any): any => {
    //             console.log('loginForDev() failed:' + error.json().error);
    //             resolve(-1);
    //         }).subscribe((res: any) => {
    //         console.log(res);
    //         if (!res.success || res.code !== 0) {
    //             console.log('loginForDev() return err:' + res.message);
    //         } else {
    //             this.setToken(res.data.token);
    //             this.setUserInfo(res.data.userInfo);
    //             this.setModuleTree(res.data.moduleTree);
    //             this.setResource(res.data.resources);
    //         }
    //         resolve(res.code);
    //     });
    // }

    public getConfigByKey(key: any) {
        return this._config[key];
    }

}

class AuthObj {
    userId: number;
    userToken: string;
    id?: number;
}
