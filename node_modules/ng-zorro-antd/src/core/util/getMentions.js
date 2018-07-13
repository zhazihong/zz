/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    var /** @type {?} */ prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    var /** @type {?} */ prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    var /** @type {?} */ regex = getRegExp(prefix);
    var /** @type {?} */ mentions = value.match(regex);
    return mentions !== null ? mentions.map(function (e) { return e.trim(); }) : [];
}
//# sourceMappingURL=getMentions.js.map