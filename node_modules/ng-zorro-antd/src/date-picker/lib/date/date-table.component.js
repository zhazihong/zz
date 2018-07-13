/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
import { valueFunctionProp } from '../../../core/util/convert';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var /** @type {?} */ DATE_ROW_NUM = 6;
var /** @type {?} */ DATE_COL_NUM = 7;
var DateTableComponent = /** @class */ (function () {
    function DateTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.dayHover = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
    /**
     * @return {?}
     */
    DateTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    DateTableComponent.prototype.isDateRealChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        var _this = this;
        if (change) {
            var /** @type {?} */ previousValue_1 = change.previousValue;
            var /** @type {?} */ currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue_1) ||
                    currentValue.length !== previousValue_1.length ||
                    currentValue.some(function (value, index) { return !_this.isSameDate(previousValue_1[index], value); });
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue_1), currentValue);
            }
        }
        return false;
    };
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    DateTableComponent.prototype.isSameDate = /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    function (left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateTableComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeHeadWeekDays = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ weekDays = [];
        var /** @type {?} */ firstDayOfWeek = this.getFirstDayOfWeek();
        for (var /** @type {?} */ colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            var /** @type {?} */ day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            var /** @type {?} */ tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getVeryShortWeekFormat = /**
     * @return {?}
     */
    function () {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.makeWeekRows = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // let justRendered = true;
        var /** @type {?} */ weekRows = [];
        var /** @type {?} */ firstDayOfWeek = this.getFirstDayOfWeek();
        var /** @type {?} */ firstDateOfMonth = this.value.setDate(1);
        // const firstDateToShow = firstDateOfMonth.setDay(firstDayOfWeek, { weekStartsOn: firstDayOfWeek });
        var /** @type {?} */ firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        var /** @type {?} */ firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        var /** @type {?} */ increased = 0;
        for (var /** @type {?} */ rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            var /** @type {?} */ week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            var _loop_1 = function (colIndex) {
                var /** @type {?} */ current = firstDateToShow.addDays(increased++);
                var /** @type {?} */ isBeforeMonthYear = this_1.isBeforeMonthYear(current, this_1.value);
                var /** @type {?} */ isAfterMonthYear = this_1.isAfterMonthYear(current, this_1.value);
                var /** @type {?} */ cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this_1.getDateTitle(current),
                    customContent: valueFunctionProp(this_1.dateRender, current),
                    // Customized content
                    content: "" + current.getDate(),
                    onClick: function () { return _this.changeValueFromInside(current); },
                    onMouseEnter: function () { return _this.dayHover.emit(cell.value); }
                };
                if (this_1.showWeek && !week.weekNum) {
                    week.weekNum = this_1.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this_1.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) {
                    // Range selections
                    var /** @type {?} */ rangeValue = this_1.hoverValue && this_1.hoverValue.length ? this_1.hoverValue : this_1.selectedValue;
                    var /** @type {?} */ start = rangeValue[0];
                    var /** @type {?} */ end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this_1.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this_1.disabledDate && this_1.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    _a[this_1.prefixCls + "-today"] = cell.isToday,
                    _a[this_1.prefixCls + "-last-month-cell"] = isBeforeMonthYear,
                    _a[this_1.prefixCls + "-next-month-btn-day"] = isAfterMonthYear,
                    _a[this_1.prefixCls + "-selected-day"] = cell.isSelected,
                    _a[this_1.prefixCls + "-disabled-cell"] = cell.isDisabled,
                    _a[this_1.prefixCls + "-selected-start-date"] = !!cell.isSelectedStartDate,
                    _a[this_1.prefixCls + "-selected-end-date"] = !!cell.isSelectedEndDate,
                    _a[this_1.prefixCls + "-in-range-cell"] = !!cell.isInRange,
                    _a);
                week.dateCells.push(cell);
                var _a;
            };
            var this_1 = this;
            for (var /** @type {?} */ colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                _loop_1(colIndex);
            }
            week.classMap = (_a = {},
                _a[this.prefixCls + "-current-week"] = week.isCurrent,
                _a[this.prefixCls + "-active-week"] = week.isActive,
                _a);
        }
        return weekRows;
        var _a;
    };
    /**
     * @return {?}
     */
    DateTableComponent.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getDateTitle = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    };
    /**
     * @param {?} date
     * @return {?}
     */
    DateTableComponent.prototype.getWeekNum = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isBeforeMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    };
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    DateTableComponent.prototype.isAfterMonthYear = /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    function (current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    };
    DateTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\"> <thead> <tr role=\"row\"> <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\"> <span class=\"{{ prefixCls }}-column-header-inner\">x</span> </th> <th *ngFor=\"let cell of headWeekDays\" role=\"columnheader\" title=\"{{ cell.short }}\" class=\"{{ prefixCls }}-column-header\" > <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span> </th> </tr> </thead> <tbody class=\"{{ prefixCls }}-tbody\"> <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\"> <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\"> {{ row.weekNum }} </td> <td *ngFor=\"let cell of row.dateCells\" (click)=\"cell.isDisabled ? null : cell.onClick()\" (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\" title=\"{{ cell.title }}\" [ngClass]=\"cell.classMap\" role=\"gridcell\" > <ng-container [ngSwitch]=\"true\"> <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\"> <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container> </ng-container> <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\"> <span [innerHTML]=\"cell.customContent\"></span> </ng-container> <ng-container *ngSwitchDefault> <div class=\"{{ prefixCls }}-date\" [attr.aria-selected]=\"cell.isSelected\" [attr.aria-disabled]=\"cell.isDisabled\" > {{ cell.content }} </div> </ng-container> </ng-container> </td> </tr> </tbody> </table>"
                },] },
    ];
    /** @nocollapse */
    DateTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    DateTableComponent.propDecorators = {
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        showWeek: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        dayHover: [{ type: Output }]
    };
    return DateTableComponent;
}());
export { DateTableComponent };
function DateTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.value;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function WeekDayLabel() { }
function WeekDayLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
function DateCell_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.customContent;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /** @type {?} */
    DateCell.prototype.onClick;
    /** @type {?} */
    DateCell.prototype.onMouseEnter;
}
/**
 * @record
 */
export function WeekRow() { }
function WeekRow_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}
//# sourceMappingURL=date-table.component.js.map