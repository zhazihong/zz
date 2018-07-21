import {Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';

export function configProvider(cfg: AppConfig) {
    console.log('configProvider------------------------' + cfg);
    return () => cfg.load();
}

@Injectable()
export class AppConfig {

    private authState: string;
    private userData: Object = null;
    private authObj: AuthObj = new AuthObj();

    constructor(private http: Http) {
        console.log('app-config--------constructor');
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


    public load() {
        // return new Promise((resolve, reject) => {
        //     this.http.get('assets/config.json')
        //         .map(res => res.json())
        //         .catch((error: any): any => {
        //             console.log('configuration file config-y.json could not be read');
        //             resolve(false);
        //             return Observable.throw(error.json().error || 'Server error');
        //         }).subscribe((response) => {
        //         this._config = response;
        //         if (this.getDevMode() === true) {
        //             this.toastService.success('您现在处于开发模式!');
        //             this.loginForDev(resolve, reject);
        //         } else {
        //             this.getCurrentUser(resolve, reject);
        //         }
        //     });
        // });
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

}
class AuthObj {
    userId: number;
    userToken: string;
    id?: number;
}
