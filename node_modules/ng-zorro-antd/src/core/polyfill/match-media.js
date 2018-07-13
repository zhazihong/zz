/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function matchMediaFunc() {
    if (typeof window === 'undefined') {
        return function () { return null; };
    }
    if (window.matchMedia) {
        return window.matchMedia.bind(window);
    }
    else {
        var /** @type {?} */ matchMediaPolyfill = function (mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                addListener: /**
                 * @return {?}
                 */
                function () {
                },
                removeListener: /**
                 * @return {?}
                 */
                function () {
                },
            };
        };
        return matchMediaPolyfill;
    }
}
export var /** @type {?} */ matchMedia = matchMediaFunc();
//# sourceMappingURL=match-media.js.map