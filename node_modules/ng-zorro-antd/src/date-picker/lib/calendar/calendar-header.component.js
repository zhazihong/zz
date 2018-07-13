/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.forceToMonth = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false;
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["showTimePicker"] || changes["panelMode"]) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        // this.panelMode = mode;
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.forceToMonth) {
            this.value = value; // Change internal value only
            this.changePanel('year');
        }
        else {
            this.changePanel('year', value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.forceToMonth) {
            this.value = value; // Change internal value only
            this.changePanel('month');
        }
        else {
            this.changePanel(this.yearToMonth ? 'month' : 'date', value);
            this.yearToMonth = false; // Clear
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.i18n.formatDateCompatible(this.value.nativeDate, localeFormat);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ year;
        var /** @type {?} */ month;
        var /** @type {?} */ day;
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changePanel('year'); },
            label: this.formatDateTime(this.locale.yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: function () { return _this.showTimePicker ? null : _this.changeToMonthPanel(); },
            label: this.locale.monthFormat ? this.formatDateTime(this.locale.monthFormat) : this.i18n.formatDate(this.value.nativeDate, 'MMM')
        };
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(this.locale.dayFormat)
            };
        }
        var /** @type {?} */ result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(function (selector) { return !!selector; });
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-header',
                    template: "<div class=\"{{ prefixCls }}-header\"> <div style=\"position: relative;\"> <a *ngIf=\"enablePrev && !showTimePicker\" class=\"{{ prefixCls }}-prev-year-btn\" role=\"button\" (click)=\"previousYear()\" title=\"{{ locale.previousYear }}\" ></a> <a *ngIf=\"enablePrev && !showTimePicker\" class=\"{{ prefixCls }}-prev-month-btn\" role=\"button\" (click)=\"previousMonth()\" title=\"{{ locale.previousMonth }}\" ></a> <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\"> <ng-container *ngFor=\"let selector of yearMonthDaySelectors\"> <a class=\"{{ selector.className }}\" role=\"button\" (click)=\"selector.onClick ? selector.onClick() : null\" title=\"{{ selector.title || null }}\" > {{ selector.label }} </a> </ng-container> </span> <a *ngIf=\"enableNext && !showTimePicker\" class=\"{{ prefixCls }}-next-month-btn\" role=\"button\" (click)=\"nextMonth()\" title=\"{{ locale.nextMonth }}\" ></a> <a *ngIf=\"enableNext && !showTimePicker\" class=\"{{ prefixCls }}-next-year-btn\" role=\"button\" (click)=\"nextYear()\" title=\"{{ locale.nextYear }}\" ></a> </div> <ng-container [ngSwitch]=\"panelMode\"> <ng-container *ngSwitchCase=\"'decade'\"> <decade-panel [locale]=\"locale\" [value]=\"value\" (valueChange)=\"onChooseDecade($event)\" ></decade-panel> </ng-container> <ng-container *ngSwitchCase=\"'year'\"> <year-panel [locale]=\"locale\" [value]=\"value\" (valueChange)=\"onChooseYear($event)\" (decadePanelShow)=\"changePanel('decade')\" ></year-panel> </ng-container> <ng-container *ngSwitchCase=\"'month'\"> <month-panel [locale]=\"locale\" [value]=\"value\" [disabledDate]=\"disabledMonth\" (valueChange)=\"onChooseMonth($event)\" (yearPanelShow)=\"changePanel('year')\" ></month-panel> </ng-container> </ng-container> </div>"
                },] },
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        forceToMonth: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
function CalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.forceToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.i18n;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
function YearMonthDaySelector_tsickle_Closure_declarations() {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.onClick;
}
//# sourceMappingURL=calendar-header.component.js.map