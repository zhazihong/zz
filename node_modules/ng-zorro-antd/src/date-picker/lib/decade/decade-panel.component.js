/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var /** @type {?} */ MAX_ROW = 4;
var /** @type {?} */ MAX_COL = 3;
var DecadePanelComponent = /** @class */ (function () {
    function DecadePanelComponent() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadePanelComponent.prototype.ngOnChanges = /**
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
    DecadePanelComponent.prototype.previousCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-100);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.nextCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(100);
    };
    /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    DecadePanelComponent.prototype.trackPanelDecade = /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    function (index, decadeData) {
        return decadeData.content;
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    DecadePanelComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    };
    /**
     * @param {?} startYear
     * @return {?}
     */
    DecadePanelComponent.prototype.chooseDecade = /**
     * @param {?} startYear
     * @return {?}
     */
    function (startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.makePanelDecades = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ decades = [];
        var /** @type {?} */ currentYear = this.value.getYear();
        var /** @type {?} */ startYear = this.startYear;
        var /** @type {?} */ endYear = this.endYear;
        var /** @type {?} */ previousYear = startYear - 10;
        var /** @type {?} */ index = 0;
        for (var /** @type {?} */ rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var /** @type {?} */ start = previousYear + index * 10;
                var /** @type {?} */ end = previousYear + index * 10 + 9;
                var /** @type {?} */ content = start + "-" + end;
                var /** @type {?} */ cell = decades[rowIndex][colIndex] = {
                    content: content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = function () { return _this.previousCentury(); };
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = function () { return _this.nextCentury(); };
                }
                else {
                    cell.onClick = function () { return _this.chooseDecade(start); };
                }
                index++;
                var _a;
            };
            var this_1 = this;
            for (var /** @type {?} */ colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return decades;
    };
    DecadePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'decade-panel',
                    template: "<div class=\"{{ prefixCls }}\"> <div class=\"{{ prefixCls }}-header\"> <a class=\"{{ prefixCls }}-prev-century-btn\" role=\"button\" (click)=\"previousCentury()\" title=\"{{ locale.previousCentury }}\" ></a> <div class=\"{{ prefixCls }}-century\"> {{ startYear }}-{{ endYear }} </div> <a class=\"{{ prefixCls }}-next-century-btn\" role=\"button\" (click)=\"nextCentury()\" title=\"{{ locale.nextCentury }}\" ></a> </div> <div class=\"{{ prefixCls }}-body\"> <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\"> <tbody class=\"{{ prefixCls }}-tbody\"> <tr *ngFor=\"let row of panelDecades\" role=\"row\"> <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\" role=\"gridcell\" title=\"{{ cell.title }}\" (click)=\"cell.onClick()\" [ngClass]=\"cell.classMap\" > <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a> </td> </tr> </tbody> </table> </div> </div>"
                },] },
    ];
    /** @nocollapse */
    DecadePanelComponent.ctorParameters = function () { return []; };
    DecadePanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return DecadePanelComponent;
}());
export { DecadePanelComponent };
function DecadePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DecadePanelComponent.prototype.locale;
    /** @type {?} */
    DecadePanelComponent.prototype.value;
    /** @type {?} */
    DecadePanelComponent.prototype.valueChange;
    /** @type {?} */
    DecadePanelComponent.prototype.prefixCls;
    /** @type {?} */
    DecadePanelComponent.prototype.panelDecades;
}
/**
 * @record
 */
export function PanelDecadeData() { }
function PanelDecadeData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelDecadeData.prototype.content;
    /** @type {?} */
    PanelDecadeData.prototype.title;
    /** @type {?} */
    PanelDecadeData.prototype.isCurrent;
    /** @type {?} */
    PanelDecadeData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelDecadeData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelDecadeData.prototype.classMap;
    /** @type {?} */
    PanelDecadeData.prototype.onClick;
}
//# sourceMappingURL=decade-panel.component.js.map