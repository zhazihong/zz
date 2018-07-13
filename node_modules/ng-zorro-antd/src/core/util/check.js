/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TemplateRef, Type } from '@angular/core';
/**
 * @param {?} value
 * @return {?}
 */
export function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}
/**
 * 校验对象是否相等
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB)
        return true;
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB)
        return false;
    var /** @type {?} */ keysA = Object.keys(objA);
    var /** @type {?} */ keysB = Object.keys(objB);
    if (keysA.length !== keysB.length)
        return false;
    var /** @type {?} */ bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (var /** @type {?} */ idx = 0; idx < keysA.length; idx++) {
        var /** @type {?} */ key = keysA[idx];
        if (!bHasOwnProperty(key))
            return false;
        if (objA[key] !== objB[key])
            return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    var /** @type {?} */ nodes = element.childNodes;
    for (var /** @type {?} */ i = 0; i < nodes.length; i++) {
        var /** @type {?} */ node = nodes.item(i);
        if ((node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
            return false;
        }
        else if ((node.nodeType === 3) && ((node.textContent.toString().trim().length !== 0))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    // tslint:disable-line:no-any
    return typeof value === 'string' && value !== '';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isTemplateRef(value) {
    // tslint:disable-line:no-any
    return value instanceof TemplateRef;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isComponent(value) {
    // tslint:disable-line:no-any
    return value instanceof Type;
}
//# sourceMappingURL=check.js.map