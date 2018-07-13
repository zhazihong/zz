/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { valueFunctionProp } from '../../../core/util/convert';
import { CandyDate } from '../candy-date';
import { getTimeConfig, isAllowedDate } from '../util';
var DateRangePopupComponent = /** @class */ (function () {
    function DateRangePopupComponent() {
        var _this = this;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter();
        this.closePicker = new EventEmitter();
        // @Output() selectDate = new EventEmitter<CandyDate>(); // Emitted when the date is selected by click the date panel (if isRange, the returned date is from one of the range parts)
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { 'left': 0, 'right': 1 };
        this.disabledStartTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'start');
        };
        this.disabledEndTime = function (value) {
            return _this.disabledTime && _this.disabledTime(value, 'end');
        };
    }
    Object.defineProperty(DateRangePopupComponent.prototype, "hasTimePicker", {
        // initialValue: CandyDate = new CandyDate(); // Initial date to show when no value inputs
        // get valueOrInitial(): CandyDate {
        //   return this.value || this.initialValue;
        // }
        get: /**
         * @return {?}
         */
        function () {
            return !!this.showTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateRangePopupComponent.prototype, "hasFooter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach(function (prop) { return _this.initialArray(prop); });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DateRangePopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isRange) {
            if (changes["value"]) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = /** @type {?} */ (this.value);
                this.valueForRangeShow = this.normalizeRangeValue(/** @type {?} */ (this.value));
            }
        }
        // Parse showTime options
        if (changes["showTime"] || changes["disabledTime"]) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes["panelMode"] && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    DateRangePopupComponent.prototype.onShowTimePickerChange = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickToday = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.onDayHover = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            var /** @type {?} */ base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    };
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPanelModeChange = /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    function (mode, partType) {
        if (this.isRange) {
            (/** @type {?} */ (this.panelMode))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHeaderChange = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.onSelectTime = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            var /** @type {?} */ newValue = this.cloneRangeDate(/** @type {?} */ (this.value));
            var /** @type {?} */ index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, (/** @type {?} */ (this.value)) || new CandyDate())); // If not select a date currently, use today
        }
    };
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValue = /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    function (value, partType) {
        if (this.isRange) {
            var /** @type {?} */ index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.changeValueFromSelect = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            var _a = /** @type {?} */ (this.selectedValue), left = _a[0], right = _a[1]; // NOTE: the left/right maybe not the sequence it select at the date panels
            if ((!left && !right) || (left && right)) {
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
            }
            else if (left && !right) {
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    };
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.enablePrevNext = /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    function (direction, partType) {
        if (this.isRange) {
            var _a = this.valueForRangeShow, start = _a[0], end = _a[1];
            var /** @type {?} */ showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPanelMode = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return /** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]);
        }
        else {
            return /** @type {?} */ (this.panelMode);
        }
    };
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValue = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getValueBySelector = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.isRange) {
            var /** @type {?} */ valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPartTypeIndex = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        return this.partTypeMap[partType];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.hasSelectedValue = /**
     * @return {?}
     */
    function () {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.isAllowedSelectedValue = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
        }
        return false;
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.timePickerDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.okDisabled = /**
     * @return {?}
     */
    function () {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(/** @type {?} */ (this.value), this.disabledDate, this.disabledTime) : false;
        }
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    DateRangePopupComponent.prototype.getTimeOptions = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        if (this.showTime && this.timeOptions) {
            return this.isRange ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onClickPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var /** @type {?} */ value = valueFunctionProp(val);
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.onPresetRangeMouseLeave = /**
     * @return {?}
     */
    function () {
        this.clearHoverValue();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DateRangePopupComponent.prototype.onHoverPresetRange = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.hoverValue = ([new CandyDate(val[0]), new CandyDate(val[1])]);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DateRangePopupComponent.prototype.getObjectKeys = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj) : [];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.closePickerPanel = /**
     * @return {?}
     */
    function () {
        this.closePicker.emit();
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.clearHoverValue = /**
     * @return {?}
     */
    function () {
        this.hoverValue = [];
    };
    /**
     * @return {?}
     */
    DateRangePopupComponent.prototype.buildTimeOptions = /**
     * @return {?}
     */
    function () {
        if (this.showTime) {
            var /** @type {?} */ showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                this.timeOptions = [this.overrideTimeOptions(showTime, this.value[0], 'start'), this.overrideTimeOptions(showTime, this.value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, /** @type {?} */ (this.value));
            }
        }
        else {
            this.timeOptions = null;
        }
    };
    /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideTimeOptions = /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    function (origin, value, partial) {
        var /** @type {?} */ disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return tslib_1.__assign({}, origin, getTimeConfig(value, disabledTimeFn));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    DateRangePopupComponent.prototype.overrideHms = /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.isValidRange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (Array.isArray(value)) {
            var start = value[0], end = value[1];
            var /** @type {?} */ grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.normalizeRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var start = value[0], end = value[1];
        var /** @type {?} */ newStart = start || new CandyDate();
        var /** @type {?} */ newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.sortRangeValue = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (Array.isArray(this[key])) {
            var _a = this[key], start = _a[0], end = _a[1];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    };
    /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.setRangeValue = /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    function (key, partType, value) {
        var /** @type {?} */ ref = this[key] = this.cloneRangeDate(/** @type {?} */ (this[key]));
        ref[this.getPartTypeIndex(partType)] = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DateRangePopupComponent.prototype.cloneRangeDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return /** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    DateRangePopupComponent.prototype.initialArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    };
    DateRangePopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'date-range-popup',
                    template: "<div class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\" [ngStyle]=\"popupStyle\"> <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\"> <div class=\"{{ prefixCls }}-panel\"> <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY --> <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container> </ng-container> <div class=\"{{ prefixCls }}-date-panel\"> <ng-container *ngIf=\"isRange; else tplSinglePart\"> <!-- Range Selectors --> <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container> <div class=\"ant-calendar-range-middle\">~</div> <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container> </ng-container> <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY --> <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container> </ng-container> </div> <ng-container *ngIf=\"isRange\"> <!-- Range ONLY --> <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container> </ng-container> </div> </div> </div> <ng-template #tplCalendarInput let-partType=\"partType\"> <calendar-input [value]=\"getValue(partType)\" (valueChange)=\"changeValue($event, partType)\" [locale]=\"locale\" [disabledDate]=\"disabledDate\" [format]=\"format\" [placeholder]=\"getPlaceholder(partType)\" ></calendar-input> </ng-template> <ng-template #tplInnerPopup let-partType=\"partType\"> <inner-popup [showWeek]=\"showWeek\" [locale]=\"locale\" [showTimePicker]=\"hasTimePicker && showTimePicker\" [timeOptions]=\"getTimeOptions(partType)\" [panelMode]=\"getPanelMode(partType)\" (panelModeChange)=\"onPanelModeChange($event, partType)\" [value]=\"getValueBySelector(partType)\" [disabledDate]=\"disabledDate\" [dateRender]=\"dateRender\" [selectedValue]=\"selectedValue\" [hoverValue]=\"hoverValue\" [enablePrev]=\"enablePrevNext('prev', partType)\" [enableNext]=\"enablePrevNext('next', partType)\" (dayHover)=\"onDayHover($event)\" (selectDate)=\"changeValueFromSelect($event)\" (selectTime)=\"onSelectTime($event, partType)\" (headerChange)=\"onHeaderChange($event, partType)\" ></inner-popup> </ng-template> <ng-template #tplFooter> <calendar-footer *ngIf=\"hasFooter\" [locale]=\"locale\" [showToday]=\"showToday\" [hasTimePicker]=\"hasTimePicker\" [timePickerDisabled]=\"timePickerDisabled()\" [okDisabled]=\"okDisabled()\" [extraFooter]=\"extraFooter\" [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\" [(showTimePicker)]=\"showTimePicker\" (showTimePickerChange)=\"onShowTimePickerChange($event)\" (clickOk)=\"resultOk.emit()\" (clickToday)=\"onClickToday($event)\" ></calendar-footer> </ng-template> <!-- Single ONLY --> <ng-template #tplSinglePart> <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container> </ng-template> <!-- Range ONLY --> <ng-template #tplRangePart let-partType=\"partType\"> <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\"> <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container> <div style=\"outline: none;\"> <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container> </div> </div> </ng-template> <!-- Range ONLY: Range Quick Selector --> <ng-template #tplRangeQuickSelector> <a *ngFor=\"let name of getObjectKeys(ranges)\" (click)=\"onClickPresetRange(ranges[name])\" (mouseenter)=\"onHoverPresetRange(ranges[name])\" (mouseleave)=\"onPresetRangeMouseLeave()\" >{{ name }}</a> </ng-template>"
                },] },
    ];
    DateRangePopupComponent.propDecorators = {
        isRange: [{ type: Input }],
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        disabledTime: [{ type: Input }],
        showToday: [{ type: Input }],
        showTime: [{ type: Input }],
        extraFooter: [{ type: Input }],
        ranges: [{ type: Input }],
        dateRender: [{ type: Input }],
        popupStyle: [{ type: Input }],
        dropdownClassName: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        resultOk: [{ type: Output }],
        closePicker: [{ type: Output }]
    };
    return DateRangePopupComponent;
}());
export { DateRangePopupComponent };
function DateRangePopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
}
//# sourceMappingURL=date-range-popup.component.js.map