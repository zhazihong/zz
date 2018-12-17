import {
  Directive,
  HostListener,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';

import { ChangePointService } from './change-point.service';
import { KEY } from './change-point.modal';

@Directive({
  selector: '[change-point]',
})
export class ChangePointDirective implements OnInit, OnDestroy {
  /**
   * stop为true时禁止回车/DOWN事件切换到下一个
   * @memberof ChangePointDirective
   */
  @Input()
  stop;
  /**
   * 当前元素所在的组 1 | 2
   * @memberof ChangePointDirective
   */
  @Input()
  group;
  /**
   * 当前元素所在组的索引
   * @type {number}
   * @memberof ChangePointDirective
   */
  index: number;
  /**
   * 元素为NZ-SELECT时,标记是否展开
   * @memberof ChangePointDirective
   */
  isOpen = false;
  /**
   * 获取当前组的dom数量
   * @readonly
   * @memberof ChangePointDirective
   */
  get length() {
    return this.myService.getLength(this.group);
  }
  constructor(
    private render2: Renderer2,
    private element: ElementRef,
    private myService: ChangePointService,
  ) {}

  ngOnInit() {
    this.group = this.group || 2;
    this.myService.addListenerDom(this.group, this.element.nativeElement);
    this.index = this.length - 1;
    this.render2.setAttribute(
      this.element.nativeElement,
      'autocomplete',
      'off',
    );
  }
  ngOnDestroy() {
    this.myService.clean(this.group, this.index);
  }

  @HostListener('keydown', ['$event'])
  keydown(e: KeyboardEvent) {
    e.stopPropagation();
    switch (e.keyCode) {
      case KEY.ENTER:
      case KEY.DOWN:
      case KEY.SPACE:
      case KEY.RIGHT:
        this.next(e);
        break;
      case KEY.UP:
      case KEY.LEFT:
        this.prev(e);
        break;
    }
  }

  /**
   * 切换到上一个可输入元素
   * @private
   * @param {*} e
   * @returns
   * @memberof ChangePointDirective
   */
  private prev(e: KeyboardEvent) {
    if (
      this.element.nativeElement.tagName.toUpperCase() === 'NZ-SELECT' &&
      this.element.nativeElement.classList.contains('ant-select-open')
    ) {
      return;
    }
    if (
      KEY.UP === e.keyCode &&
      this.element.nativeElement.tagName.toUpperCase() === 'NZ-INPUT-NUMBER'
    ) {
      return;
    }
    if (
      this.element.nativeElement.tagName.toUpperCase() === 'MULTIPLE-CHOICE'
    ) {
      if (!this.element.nativeElement.children[0].children[1]) {
        this.isOpen = false;
      }
      if (this.isOpen) {
        return;
      }
    }
    let ele,
      fGroupLength = this.myService.getLength(1),
      prevGroup = this.myService.getLength();
    if (this.index !== 0) {
      //不是当前组的第一个
      ele = this.myService.tabIndexList[this.group][this.index - 1];
      if (ele.parentElement.hasAttribute('hidden')) {
        ele = this.myService.tabIndexList[this.group][this.index - 2];
      }
    } else if ('1' === this.group || 1 === this.group) {
      //第一组的第一个
      ele = this.myService.tabIndexList[prevGroup][
        this.myService.getLength(prevGroup) - 1
      ];
    } else {
      //其他组的第一个
      ele = this.myService.tabIndexList[this.group - 1][fGroupLength - 1];
    }
    this.myService.setFocus(ele);
  }

  /**
   * 切换到下一个可输入元素
   *
   * @private
   * @param {KeyboardEvent} e
   * @returns
   * @memberof ChangePointDirective
   */
  private next(e: KeyboardEvent) {
    if (this.element.nativeElement.tagName.toUpperCase() === 'NZ-SELECT') {
      if (KEY.SPACE === e.keyCode || (KEY.DOWN === e.keyCode && !this.isOpen)) {
        this.isOpen = !this.isOpen;
        return;
      }
      if (KEY.DOWN === e.keyCode || (KEY.RIGHT === e.keyCode && this.isOpen)) {
        return;
      }
      if (KEY.ENTER === e.keyCode) {
        if (!this.isOpen) {
          this.element.nativeElement.click();
          this.isOpen = true;
          return;
        } else {
          this.isOpen = false;
          if (
            this.element.nativeElement.getAttribute('ng-reflect-nz-mode') ===
            'multiple'
          ) {
            return;
          }
        }
      }
    }
    if (this.stop && (KEY.ENTER === e.keyCode || KEY.DOWN === e.keyCode)) {
      return;
    }
    if (
      KEY.DOWN === e.keyCode &&
      this.element.nativeElement.tagName.toUpperCase() === 'NZ-INPUT-NUMBER'
    ) {
      return;
    }
    if (
      this.element.nativeElement.tagName.toUpperCase() === 'MULTIPLE-CHOICE'
    ) {
      if (!this.element.nativeElement.children[0].children[1]) {
        this.isOpen = false;
      }
      if (this.isOpen) {
        return;
      } else if (KEY.DOWN === e.keyCode || KEY.ENTER === e.keyCode) {
        this.element.nativeElement.children[0].children[0].click();
        this.isOpen = true;
        return;
      }
    }
    let ele;
    if (this.index < this.length - 1) {
      ele = this.myService.tabIndexList[this.group][this.index + 1];
      if (ele.parentElement.hasAttribute('hidden')) {
        ele = this.myService.tabIndexList[this.group][this.index + 2];
      }
    } else if (this.myService.getLength(Number(this.group) + 1)) {
      ele = this.myService.tabIndexList[Number(this.group) + 1][0];
    } else {
      ele = this.myService.tabIndexList[1][0];
    }
    this.myService.setFocus(ele);
  }
}
