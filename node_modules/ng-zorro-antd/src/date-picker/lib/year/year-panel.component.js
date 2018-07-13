/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var /** @type {?} */ MAX_ROW = 4;
var /** @type {?} */ MAX_COL = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    YearPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.previousDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-10);
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.nextDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(10);
    };
    /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    YearPanelComponent.prototype.trackPanelYear = /**
     * @param {?} index
     * @param {?} yearData
     * @return {?}
     */
    function (index, yearData) {
        return yearData.content;
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    YearPanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    YearPanelComponent.prototype.chooseYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.makePanelYears = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ years = [];
        var /** @type {?} */ currentYear = this.currentYear;
        var /** @type {?} */ startYear = this.startYear;
        var /** @type {?} */ endYear = this.endYear;
        var /** @type {?} */ previousYear = startYear - 1;
        var /** @type {?} */ index = 0;
        for (var /** @type {?} */ rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var /** @type {?} */ year = previousYear + index;
                var /** @type {?} */ content = String(year);
                var /** @type {?} */ cell = years[rowIndex][colIndex] = {
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousDecade(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextDecade(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseYear(cell.year); };
                }
                index++;
                var _a;
            };
            var this_1 = this;
            for (var /** @type {?} */ colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    YearPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'year-panel',
                    template: "<div class=\"{{ prefixCls }}\"> <div> <div class=\"{{ prefixCls }}-header\"> <a class=\"{{ prefixCls }}-prev-decade-btn\" role=\"button\" (click)=\"previousDecade()\" title=\"{{ locale.previousDecade }}\" ></a> <a class=\"{{ prefixCls }}-decade-select\" role=\"button\" (click)=\"decadePanelShow.emit()\" title=\"{{ locale.decadeSelect }}\" > <span class=\"{{ prefixCls }}-decade-select-content\"> {{ startYear }}-{{ endYear }} </span> <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span> </a> <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a> </div> <div class=\"{{ prefixCls }}-body\"> <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\"> <tbody class=\"{{ prefixCls }}-tbody\"> <tr *ngFor=\"let row of panelYears\" role=\"row\"> <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\" role=\"gridcell\" title=\"{{ yearCell.title }}\" (click)=\"yearCell.onClick()\" [ngClass]=\"yearCell.classMap\" > <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a> </td> </tr> </tbody> </table> </div> </div> </div>"
                },] },
    ];
    /** @nocollapse */
    YearPanelComponent.ctorParameters = function () { return []; };
    YearPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        decadePanelShow: [{ type: Output }]
    };
    return YearPanelComponent;
}());
export { YearPanelComponent };
function YearPanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
function PanelYearData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}
//# sourceMappingURL=year-panel.component.js.map