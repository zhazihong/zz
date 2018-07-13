/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LOGGER_SERVICE_PROVIDER, NZ_LOGGER_STATE } from './logger.service';
var LoggerModule = /** @class */ (function () {
    function LoggerModule() {
    }
    LoggerModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: NZ_LOGGER_STATE, useValue: false },
                        LOGGER_SERVICE_PROVIDER,
                    ],
                },] },
    ];
    return LoggerModule;
}());
export { LoggerModule };
//# sourceMappingURL=logger.module.js.map