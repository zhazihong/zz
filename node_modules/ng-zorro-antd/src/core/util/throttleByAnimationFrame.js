/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    var /** @type {?} */ requestId;
    var /** @type {?} */ later = function (args) { return function () {
        requestId = null;
        fn.apply(void 0, args);
    }; };
    var /** @type {?} */ throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    (/** @type {?} */ (throttled)).cancel = function () { return cancelRequestAnimationFrame(/** @type {?} */ ((requestId))); };
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var /** @type {?} */ fn = descriptor.value;
        var /** @type {?} */ definingProperty = false;
        return {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var /** @type {?} */ boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true,
                });
                definingProperty = false;
                return boundFn;
            },
        };
    };
}
//# sourceMappingURL=throttleByAnimationFrame.js.map