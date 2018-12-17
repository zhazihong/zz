import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import {KEY} from '../change-point/change-point.modal';

@Component({
  selector: 'multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.less'],
})
export class MultipleChoiceComponent implements OnInit, OnDestroy {
  @Input()
  listData;
  @Input()
  mLabel;
  @Input()
  mValue;
  @Input()
  mTitle;
  @Input()
  checkedData: Array<any>;
  @Output()
  dataChecked = new EventEmitter<Array<any>>();
  @ViewChild('mWrapper')
  mWrapper;
  @ViewChild('okBtn')
  okBtn;
  @ViewChild('cancelBtn')
  cancelBtn;
  @ViewChild('multipleMask')
  multipleMask;
  showModal = false;
  subscription;
  showNoData = false;

  get activeElement() {
    return document.activeElement;
  }

  constructor() {}

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  openModal() {
    this.showModal = true;
    this.listData.map(item => {
      const checkedItem = this.checkedData.find(o => o.id === item.id);
      item.checked = checkedItem ? true : false;
    });
    console.log(this.listData);

    setTimeout(() => {
      this.subscription = fromEvent(
        this.multipleMask.nativeElement,
        'keydown',
      ).subscribe((e: KeyboardEvent) => {
        e.stopPropagation();
        if (!this.showModal) {
          return;
        }
        switch (e.keyCode) {
          case KEY.UP:
          case KEY.LEFT:
            e.preventDefault();
            this.prev();
            break;
          case KEY.DOWN:
          case KEY.RIGHT:
            e.preventDefault();
            this.next();
            break;
          case KEY.ENTER:
            this.clickEvent(this.activeElement);
            break;
        }
      });

      if (this.listData.length) {
        this.setFocus(this.mWrapper.nativeElement.children[0], 'cur');
      } else {
        this.showNoData = true;
      }
    });
  }

  closeModal() {
    this.showModal = false;
  }

  ok() {
    this.checkedData = this.listData.filter(item => item.checked);
    console.log(this.checkedData);
    this.dataChecked.emit(this.checkedData);
    this.closeModal();
  }

  next() {
    if (this.activeElement.className.includes('ant-checkbox-input')) {
      this.setFocus(this.activeElement, 'next');
    } else if (this.activeElement.className.includes('m-ok')) {
      this.cancelBtn.el.focus();
    } else {
      this.setFocus(this.mWrapper.nativeElement.children[0], 'cur');
    }
  }
  prev() {
    if (this.activeElement.className.includes('ant-checkbox-input')) {
      this.setFocus(this.activeElement, 'prev');
    } else if (this.activeElement.className.includes('m-cancel')) {
      this.okBtn.el.focus();
    } else {
      this.setFocus(
        this.mWrapper.nativeElement.children[this.listData.length - 1],
        'cur',
      );
    }
  }

  setFocus(curDom, type) {
    let ele,
      parentLi = curDom.parentNode.parentNode.parentNode;
    switch (type) {
      case 'next':
        if (parentLi.nextSibling) {
          ele = parentLi.nextSibling.children[0].children[0].children[0];
        } else {
          ele = this.okBtn.el;
        }
        break;
      case 'prev':
        if (parentLi.previousElementSibling) {
          ele =
            parentLi.previousElementSibling.children[0].children[0].children[0];
        } else {
          ele = this.cancelBtn.el;
        }
        break;
      case 'cur':
        ele = curDom.children[0].children[0].children[0];
        break;
      default:
        break;
    }
    ele.focus();
  }

  clickEvent(ele) {
    if (
      ele.className.includes('ant-checkbox-input') ||
      ele.className.includes('ant-btn')
    ) {
      ele.click();
    }
  }
}
