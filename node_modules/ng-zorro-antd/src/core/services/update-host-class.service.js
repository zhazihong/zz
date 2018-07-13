/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Renderer2 } from '@angular/core';
var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(renderer) {
        this.renderer = renderer;
        this.classMap = {};
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    NzUpdateHostClassService.prototype.updateHostClass = /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = tslib_1.__assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.removeClass = /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.addClass = /**
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var /** @type {?} */ i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                if (classMap[i]) {
                    renderer.addClass(el, i);
                }
            }
        }
    };
    NzUpdateHostClassService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NzUpdateHostClassService.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    return NzUpdateHostClassService;
}());
export { NzUpdateHostClassService };
function NzUpdateHostClassService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=update-host-class.service.js.map