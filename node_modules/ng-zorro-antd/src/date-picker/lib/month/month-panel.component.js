/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var MonthPanelComponent = /** @class */ (function () {
    function MonthPanelComponent() {
        this.valueChange = new EventEmitter();
        this.yearPanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    MonthPanelComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    MonthPanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
    };
    MonthPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month-panel',
                    template: "<div class=\"{{ prefixCls }}\"> <div> <div class=\"{{ prefixCls }}-header\"> <a class=\"{{ prefixCls }}-prev-year-btn\" role=\"button\" (click)=\"previousYear()\" title=\"{{ locale.previousYear }}\" ></a> <a class=\"{{ prefixCls }}-year-select\" role=\"button\" (click)=\"yearPanelShow.emit()\" title=\"{{ locale.yearSelect }}\" > <span class=\"{{ prefixCls }}-year-select-content\">{{ value.getYear() }}</span> <span class=\"{{ prefixCls }}-year-select-arrow\">x</span> </a> <a class=\"{{ prefixCls }}-next-year-btn\" role=\"button\" (click)=\"nextYear()\" title=\"{{ locale.nextYear }}\" ></a> </div> <div class=\"{{ prefixCls }}-body\"> <month-table [disabledDate]=\"disabledDate\" [value]=\"value\" (valueChange)=\"valueChange.emit($event)\"></month-table> </div> </div> </div>"
                },] },
    ];
    /** @nocollapse */
    MonthPanelComponent.ctorParameters = function () { return []; };
    MonthPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }],
        yearPanelShow: [{ type: Output }]
    };
    return MonthPanelComponent;
}());
export { MonthPanelComponent };
function MonthPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthPanelComponent.prototype.locale;
    /** @type {?} */
    MonthPanelComponent.prototype.value;
    /** @type {?} */
    MonthPanelComponent.prototype.valueChange;
    /** @type {?} */
    MonthPanelComponent.prototype.disabledDate;
    /** @type {?} */
    MonthPanelComponent.prototype.yearPanelShow;
    /** @type {?} */
    MonthPanelComponent.prototype.prefixCls;
}
//# sourceMappingURL=month-panel.component.js.map