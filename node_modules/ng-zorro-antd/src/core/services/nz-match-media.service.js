/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { matchMedia } from '../polyfill/match-media';
var NzMatchMediaService = /** @class */ (function () {
    function NzMatchMediaService() {
    }
    /**
     * @param {?} mediaQuery
     * @return {?}
     */
    NzMatchMediaService.prototype.matchMedia = /**
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        return matchMedia(mediaQuery);
    };
    NzMatchMediaService.decorators = [
        { type: Injectable },
    ];
    return NzMatchMediaService;
}());
export { NzMatchMediaService };
//# sourceMappingURL=nz-match-media.service.js.map