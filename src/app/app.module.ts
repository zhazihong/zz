import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppService} from './app.service';
import {AppConfig, configProvider} from './app.config';
import {AppInterceptor} from './core/interceptor/AppInterceptor';

/** 配置 angular i18n **/
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

/** 配置 ng-zorro-antd 国际化 **/
import {NZ_I18N, en_US} from 'ng-zorro-antd';
import {CommonService} from './core/net/common.service';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './pages/home/ngrx-demo/counter/counter.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        /** 导入 ng-zorro-antd 模块 **/
        NgZorroAntdModule,
        // NgRx 状态管理
        StoreModule.forRoot({ count: counterReducer })
    ],
    providers: [
        AppService,
        AppConfig,
        // {
        //     'provide': APP_INITIALIZER,
        //     'useFactory': configProvider,
        //     'deps': [AppConfig],
        //     'multi': true
        // },
        // {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
        {provide: NZ_I18N, useValue: en_US},
        CommonService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
