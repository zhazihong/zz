/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var NzMeasureScrollbarService = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzMeasureScrollbarService(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    Object.defineProperty(NzMeasureScrollbarService.prototype, "scrollBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (isNotNil(this._scrollbarWidth)) {
                return this._scrollbarWidth;
            }
            this.initScrollBarWidth();
            return this._scrollbarWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMeasureScrollbarService.prototype.initScrollBarWidth = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ scrollDiv = this.document.createElement('div');
        for (var /** @type {?} */ scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        var /** @type {?} */ width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    };
    NzMeasureScrollbarService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] },
    ];
    /** @nocollapse */
    NzMeasureScrollbarService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
    return NzMeasureScrollbarService;
}());
export { NzMeasureScrollbarService };
function NzMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.document;
}
//# sourceMappingURL=nz-measure-scrollbar.service.js.map