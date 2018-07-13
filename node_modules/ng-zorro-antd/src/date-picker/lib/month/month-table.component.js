/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var /** @type {?} */ MAX_ROW = 4;
var /** @type {?} */ MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["disabledDate"]) {
            this.render();
        }
    };
    /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    function (index, monthData) {
        return monthData.month;
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ months = [];
        var /** @type {?} */ currentMonth = this.value.getMonth();
        var /** @type {?} */ today = new CandyDate();
        var /** @type {?} */ monthValue = 0;
        for (var /** @type {?} */ rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var /** @type {?} */ month = this_1.value.setMonth(monthValue);
                var /** @type {?} */ disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                var /** @type {?} */ content = this_1.i18n.formatDateCompatible(month.nativeDate, 'MMM');
                var /** @type {?} */ cell = months[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: function () { return _this.chooseMonth(cell.month); }
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.month === currentMonth,
                    _a[this_1.prefixCls + "-current-cell"] = today.getYear() === this_1.value.getYear() && cell.month === today.getMonth(),
                    _a);
                monthValue++;
                var _a;
            };
            var this_1 = this;
            for (var /** @type {?} */ colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\"> <tbody class=\"{{ prefixCls }}-tbody\"> <tr *ngFor=\"let row of panelMonths\" role=\"row\"> <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\" role=\"gridcell\" title=\"{{ monthCell.title }}\" (click)=\"monthCell.disabled ? null : monthCell.onClick()\" [ngClass]=\"monthCell.classMap\" > <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a> </td> </tr> </tbody> </table>"
                },] },
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
export { MonthTableComponent };
function MonthTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /** @type {?} */
    MonthTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function PanelMonthData() { }
function PanelMonthData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
}
//# sourceMappingURL=month-table.component.js.map