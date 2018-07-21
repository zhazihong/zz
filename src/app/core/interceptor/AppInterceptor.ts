import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AppConfig} from '../../app.config';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private appConfig: AppConfig) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq;
        const authObj = this.appConfig.getAuthObj();
        if (authObj) {
            // HttpRequest对象是不可变的，因此为了修改它们，我们需要先复制，然后修改修改后的副本上的复制和调用句柄 '🍕'
            authReq = req.clone({
                setHeaders: {
                    'X-Auth-Token': authObj.userToken,
                    'X-User-Id': String(authObj.userId),
                    'X-Api-Key': ''
                }
            });
        } else {
            authReq = req;
        }
        return next.handle(authReq);
    }
}
