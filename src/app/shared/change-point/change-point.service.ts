import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

import { KEY, TabIndex } from './change-point.modal';

@Injectable()
export class ChangePointService {
  /**
   * 需要键盘聚焦的元素集合
   * @type {TabIndex}
   * @memberof ChangePointService
   */
  tabIndexList: TabIndex = {};
  subscription;
  /**
   * 可以自动聚焦的元素(不需要设置tabindex)
   * @memberof ChangePointService
   */
  tagLists = ['INPUT', 'SELECT', 'TEXTAREA'];

  constructor() {
    this.tabIndexList = {};
  }

  /**
   * 获取当前聚焦元素
   * @readonly
   * @memberof ChangePointService
   */
  get activeElement() {
    return document.activeElement;
  }

  /**
   * 焦点不在已知元素内时,监听全局键盘事件
   * @memberof ChangePointService
   */
  setGlobalKeydown() {
    this.subscription = fromEvent(document, 'keydown').subscribe(
      (e: KeyboardEvent) => {
        let ele;
        switch (e.keyCode) {
          case KEY.RIGHT:
            if (this.getLength() > 1) {
              ele = this.tabIndexList[this.getLength()][0];
            } else {
              ele = this.tabIndexList[1][0];
            }
            break;
          case KEY.UP:
            if (
              this.activeElement.className.includes('ag-') &&
              this.activeElement.parentElement.className.includes('ag-row') &&
              this.activeElement.parentElement.getAttribute('row-index') !== '0'
            ) {
              break;
            }
            ele = this.tabIndexList[1][this.getLength(1) - 1];
            break;
          case KEY.LEFT:
            ele = this.tabIndexList[1][this.getLength(1) - 1];
            break;
        }
        this.setFocus(ele);
      },
    );
  }

  /**
   * 初始化组件时缓存相关组件
   * @param {*} group
   * @param {*} ele
   * @memberof ChangePointService
   */
  addListenerDom(group, ele) {
    if (this.getLength(1) === 0) {
      this.setGlobalKeydown();
    }
    this.tabIndexList[group] = this.tabIndexList[group] || {};
    this.tabIndexList[group][this.getLength(group)] = ele;
  }

  /**
   * 组件销毁时清除缓存
   * @param {*} group
   * @param {*} index
   * @memberof ChangePointService
   */
  clean(group, index) {
    delete this.tabIndexList[group][index];
    if (!this.getLength(group)) {
      delete this.tabIndexList[group];
    }
    if (this.getLength(1) === 0) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * 获取当前group的元素数量或者group长度
   *
   * @param {*} [group]
   * @returns
   * @memberof ChangePointService
   */
  getLength(group?) {
    if (group) {
      return Object.keys(this.tabIndexList[group] || {}).length;
    }
    return Object.keys(this.tabIndexList).length;
  }
  /**
   * 设置聚焦
   * @param {*} ele
   * @returns
   * @memberof ChangePointService
   */
  setFocus(ele) {
    if (!ele) {
      return;
    }
    if (
      ele.hasAttribute('tabindex') ||
      this.tagLists.includes(ele.tagName.toUpperCase())
    ) {
      setTimeout(() => {
        ele.focus();
      });
      return;
    }
    if (ele.tagName.toUpperCase() === 'NZ-SELECT') {
      this.setFocus(ele.children[0]);
    }
    if (ele.tagName.toUpperCase() === 'NZ-INPUT-NUMBER') {
      this.setFocus(ele.children[1].children[0]);
    }
    if (ele.tagName.toUpperCase() === 'MULTIPLE-CHOICE') {
      this.setFocus(ele.children[0].children[0]);
    }
  }

  /* getCursorPos(element) {
    if (element.tagName.toUpperCase() = "NZ-INPUT-NUMBER") {
      
    }
    let cursorPos = 0;
    if (element.selectionStart || element.selectionStart == '0') {
      cursorPos = element.selectionStart;
    }
    console.log(cursorPos)
    return cursorPos;
  } */
}
