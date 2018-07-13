/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var InnerPopupComponent = /** @class */ (function () {
    function InnerPopupComponent() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter();
        this.selectDate = new EventEmitter();
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] && !this.value) {
            this.value = new CandyDate();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectTime.emit(new CandyDate(date));
    };
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // this.value = date instanceof CandyDate ? date : new CandyDate(date);
        var /** @type {?} */ value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    };
    InnerPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'inner-popup',
                    template: "<calendar-header [(panelMode)]=\"panelMode\" (panelModeChange)=\"panelModeChange.emit($event)\" [(value)]=\"value\" (valueChange)=\"headerChange.emit($event)\" [locale]=\"locale\" [showTimePicker]=\"showTimePicker\" [enablePrev]=\"enablePrev\" [enableNext]=\"enableNext\" ></calendar-header> <ng-container *ngIf=\"showTimePicker && timeOptions\"> <nz-time-picker-panel [nzInDatePicker]=\"true\" [ngModel]=\"value.nativeDate\" (ngModelChange)=\"onSelectTime($event)\" [format]=\"timeOptions.nzFormat\" [nzHourStep]=\"timeOptions.nzHourStep\" [nzMinuteStep]=\"timeOptions.nzMinuteStep\" [nzSecondStep]=\"timeOptions.nzSecondStep\" [nzDisabledHours]=\"timeOptions.nzDisabledHours\" [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\" [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\" [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\" [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\" [nzAddOn]=\"timeOptions.nzAddOn\" ></nz-time-picker-panel> </ng-container> <div class=\"{{ prefixCls }}-body\"> <date-table [showWeek]=\"showWeek\" [value]=\"value\" (valueChange)=\"onSelectDate($event)\" showWeekNumber=\"false\" [disabledDate]=\"disabledDate\" [dateRender]=\"dateRender\" [selectedValue]=\"selectedValue\" [hoverValue]=\"hoverValue\" (dayHover)=\"dayHover.emit($event)\" ></date-table> </div>"
                },] },
    ];
    /** @nocollapse */
    InnerPopupComponent.ctorParameters = function () { return []; };
    InnerPopupComponent.propDecorators = {
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        timeOptions: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        headerChange: [{ type: Output }],
        selectDate: [{ type: Output }],
        selectTime: [{ type: Output }],
        dayHover: [{ type: Output }]
    };
    return InnerPopupComponent;
}());
export { InnerPopupComponent };
function InnerPopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}
//# sourceMappingURL=inner-popup.component.js.map