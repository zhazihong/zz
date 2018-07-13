/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * [Temporary] Get the first day of week depend on locale (0-6 represent as Sunday-Saturday)
 * @param {?=} locale Locale code
 * @return {?}
 */
export function firstDayOfWeek(locale) {
    return locale && ['zh-cn', 'zh-tw'].indexOf(locale.toLowerCase()) > -1 ? 1 : 0;
}
//# sourceMappingURL=util.js.map