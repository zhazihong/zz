import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ServerCfg} from '../model/ServerCfg';

export const SWIFT_HEALTH_HIDE_LOADING = 'swift_health_hide_loading';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  // 服务器地址配置
  serverCfg: ServerCfg = new ServerCfg();
  private contentTypeHeader = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  /**
   * 通用get请求
   * @param url
   * @param params
   * @param hideLoading 如果不需要loading效果 将此参数设置为true 拦截器中会判断并去掉此参数
   * 只建议在GET请求中使用
   */
  public get(url: any, params?: any, hideLoading?: true): Observable<any> {
    if (hideLoading) {
      params[SWIFT_HEALTH_HIDE_LOADING] = true;
    }
    const _url = `${this.serverCfg.server}/${url}`;
    return this.http.get(_url, { params: params });
  }

  public delete(url: any): Observable<any> {
    const _url = `${this.serverCfg.server}/${url}`;
    return this.http.delete(_url, { headers: this.contentTypeHeader });
  }

  public post(url: any, data?: any): Observable<any> {
    const _url = `${this.serverCfg.server}/${url}`;
    return this.http.post(_url, JSON.stringify(data), {
      headers: this.contentTypeHeader,
    });
  }

}
