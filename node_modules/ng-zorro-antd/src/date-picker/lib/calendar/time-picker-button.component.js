/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TimePickerButtonComponent = /** @class */ (function () {
    function TimePickerButtonComponent() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    TimePickerButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    };
    TimePickerButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time-picker-button',
                    template: "<a class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\" role=\"button\" (click)=\"timePickerDisabled ? null : onClick()\" > {{ showTimePicker ? locale.dateSelect : locale.timeSelect }} </a>"
                },] },
    ];
    TimePickerButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        timePickerDisabled: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }]
    };
    return TimePickerButtonComponent;
}());
export { TimePickerButtonComponent };
function TimePickerButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TimePickerButtonComponent.prototype.locale;
    /** @type {?} */
    TimePickerButtonComponent.prototype.timePickerDisabled;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePicker;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePickerChange;
    /** @type {?} */
    TimePickerButtonComponent.prototype.prefixCls;
}
//# sourceMappingURL=time-picker-button.component.js.map