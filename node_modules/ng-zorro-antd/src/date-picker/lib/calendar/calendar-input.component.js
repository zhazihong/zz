/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
var CalendarInputComponent = /** @class */ (function () {
    function CalendarInputComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.invalidInputClass = '';
    }
    /**
     * @return {?}
     */
    CalendarInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.onInputKeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ date = this.checkValidInputDate(event);
        if (!date || (this.disabledDate && this.disabledDate(date.nativeDate))) {
            return;
        }
        if (!date.isSame(this.value, 'second')) {
            // Not same with original value
            this.value = date;
            this.valueChange.emit(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarInputComponent.prototype.toReadableInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value ? this.i18n.formatDateCompatible(value.nativeDate, this.format) : '';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CalendarInputComponent.prototype.checkValidInputDate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ input = (/** @type {?} */ (event.target)).value;
        var /** @type {?} */ date = new CandyDate(input);
        this.invalidInputClass = '';
        if (date.isInvalid() || input !== this.toReadableInput(date)) {
            // Should also match the input format exactly
            this.invalidInputClass = this.prefixCls + "-input-invalid";
            return null;
        }
        return date;
    };
    CalendarInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'calendar-input',
                    template: "<div class=\"{{ prefixCls }}-input-wrap\"> <div class=\"{{ prefixCls }}-date-input-wrap\"> <input class=\"{{ prefixCls }}-input {{ invalidInputClass }}\" placeholder=\"{{ placeholder || locale.dateSelect }}\" value=\"{{ toReadableInput(value) }}\" (keyup)=\"onInputKeyup($event)\" /> </div> <a class=\"{{ prefixCls }}-clear-btn\" role=\"button\" title=\"{{ locale.clear }}\"></a> </div>"
                },] },
    ];
    /** @nocollapse */
    CalendarInputComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    CalendarInputComponent.propDecorators = {
        locale: [{ type: Input }],
        format: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabledDate: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return CalendarInputComponent;
}());
export { CalendarInputComponent };
function CalendarInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarInputComponent.prototype.locale;
    /** @type {?} */
    CalendarInputComponent.prototype.format;
    /** @type {?} */
    CalendarInputComponent.prototype.placeholder;
    /** @type {?} */
    CalendarInputComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarInputComponent.prototype.value;
    /** @type {?} */
    CalendarInputComponent.prototype.valueChange;
    /** @type {?} */
    CalendarInputComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarInputComponent.prototype.invalidInputClass;
    /** @type {?} */
    CalendarInputComponent.prototype.i18n;
}
//# sourceMappingURL=calendar-input.component.js.map