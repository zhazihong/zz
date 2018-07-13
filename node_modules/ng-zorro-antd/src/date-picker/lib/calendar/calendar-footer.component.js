/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
var CalendarFooterComponent = /** @class */ (function () {
    function CalendarFooterComponent() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        // @Input() disabled: boolean = false;
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    CalendarFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-footer',
                    template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\"> <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\"> <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container> </div> <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\"> <ng-container [ngSwitch]=\"true\"> <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\"> <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container> </ng-container> <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\"> <span [innerHTML]=\"extraFooter\"></span> </ng-container> </ng-container> </div> <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\"> <today-button *ngIf=\"showToday\" [locale]=\"locale\" [disabledDate]=\"disabledDate\" [hasTimePicker]=\"hasTimePicker\" (clickToday)=\"clickToday.emit($event)\" ></today-button> <time-picker-button *ngIf=\"hasTimePicker\" [locale]=\"locale\" [timePickerDisabled]=\"timePickerDisabled\" [showTimePicker]=\"showTimePicker\" (showTimePickerChange)=\"showTimePickerChange.emit($event)\" ></time-picker-button> <ok-button *ngIf=\"hasTimePicker\" [okDisabled]=\"okDisabled\" [locale]=\"locale\" (clickOk)=\"clickOk.emit()\" ></ok-button> </span> </div>"
                },] },
    ];
    CalendarFooterComponent.propDecorators = {
        locale: [{ type: Input }],
        showToday: [{ type: Input }],
        hasTimePicker: [{ type: Input }],
        isRange: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }],
        timePickerDisabled: [{ type: Input }],
        okDisabled: [{ type: Input }],
        disabledDate: [{ type: Input }],
        extraFooter: [{ type: Input }],
        rangeQuickSelector: [{ type: Input }],
        clickOk: [{ type: Output }],
        clickToday: [{ type: Output }]
    };
    return CalendarFooterComponent;
}());
export { CalendarFooterComponent };
function CalendarFooterComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}
//# sourceMappingURL=calendar-footer.component.js.map