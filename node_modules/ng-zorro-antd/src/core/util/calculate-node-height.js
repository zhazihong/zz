/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Thanks to https://github.com/andreypopp/react-textarea-autosize/
/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var /** @type {?} */ HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var /** @type {?} */ SIZING_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
];
/**
 * @record
 */
export function NodeType() { }
function NodeType_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeType.prototype.sizingStyle;
    /** @type {?} */
    NodeType.prototype.paddingSize;
    /** @type {?} */
    NodeType.prototype.borderSize;
    /** @type {?} */
    NodeType.prototype.boxSizing;
}
/**
 * @record
 */
export function NodeProperty() { }
function NodeProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    NodeProperty.prototype.height;
    /** @type {?} */
    NodeProperty.prototype.minHeight;
    /** @type {?} */
    NodeProperty.prototype.maxHeight;
    /** @type {?} */
    NodeProperty.prototype.overflowY;
}
var /** @type {?} */ computedStyleCache = {};
var /** @type {?} */ hiddenTextarea;
/**
 * @param {?} node
 * @param {?=} useCache
 * @return {?}
 */
function calculateNodeStyling(node, useCache) {
    if (useCache === void 0) { useCache = false; }
    var /** @type {?} */ nodeRef = /** @type {?} */ ((node.getAttribute('id') ||
        node.getAttribute('data-reactid') ||
        node.getAttribute('name')));
    if (useCache && computedStyleCache[nodeRef]) {
        return computedStyleCache[nodeRef];
    }
    var /** @type {?} */ style = window.getComputedStyle(node);
    var /** @type {?} */ boxSizing = (style.getPropertyValue('box-sizing') ||
        style.getPropertyValue('-moz-box-sizing') ||
        style.getPropertyValue('-webkit-box-sizing'));
    var /** @type {?} */ paddingSize = (parseFloat(style.getPropertyValue('padding-bottom')) +
        parseFloat(style.getPropertyValue('padding-top')));
    var /** @type {?} */ borderSize = (parseFloat(style.getPropertyValue('border-bottom-width')) +
        parseFloat(style.getPropertyValue('border-top-width')));
    var /** @type {?} */ sizingStyle = SIZING_STYLE
        .map(function (name) { return name + ":" + style.getPropertyValue(name); })
        .join(';');
    var /** @type {?} */ nodeInfo = {
        sizingStyle: sizingStyle,
        paddingSize: paddingSize,
        borderSize: borderSize,
        boxSizing: boxSizing
    };
    if (useCache && nodeRef) {
        computedStyleCache[nodeRef] = nodeInfo;
    }
    return nodeInfo;
}
/**
 * @param {?} uiTextNode
 * @param {?=} useCache
 * @param {?=} minRows
 * @param {?=} maxRows
 * @return {?}
 */
export default function calculateNodeHeight(uiTextNode, useCache, minRows, maxRows) {
    if (useCache === void 0) { useCache = false; }
    if (minRows === void 0) { minRows = null; }
    if (maxRows === void 0) { maxRows = null; }
    if (!hiddenTextarea) {
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    // Fix wrap="off" issue
    // https://github.com/ant-design/ant-design/issues/6577
    if (uiTextNode.getAttribute('wrap')) {
        hiddenTextarea.setAttribute('wrap', /** @type {?} */ (uiTextNode.getAttribute('wrap')));
    }
    else {
        hiddenTextarea.removeAttribute('wrap');
    }
    // Copy all CSS properties that have an impact on the height of the content in
    // the textbox
    var _a = calculateNodeStyling(uiTextNode, useCache), paddingSize = _a.paddingSize, borderSize = _a.borderSize, boxSizing = _a.boxSizing, sizingStyle = _a.sizingStyle;
    // Need to have the overflow attribute to hide the scrollbar otherwise
    // text-lines will not calculated properly as the shadow will technically be
    // narrower for content
    hiddenTextarea.setAttribute('style', sizingStyle + ";" + HIDDEN_TEXTAREA_STYLE);
    hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
    var /** @type {?} */ minHeight = Number.MIN_SAFE_INTEGER;
    var /** @type {?} */ maxHeight = Number.MAX_SAFE_INTEGER;
    var /** @type {?} */ height = hiddenTextarea.scrollHeight;
    var /** @type {?} */ overflowY;
    if (boxSizing === 'border-box') {
        // border-box: add border, since height = content + padding + border
        height = height + borderSize;
    }
    else if (boxSizing === 'content-box') {
        // remove padding, since height = content
        height = height - paddingSize;
    }
    if (minRows !== null || maxRows !== null) {
        // measure height of a textarea with a single row
        hiddenTextarea.value = '';
        var /** @type {?} */ singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
        if (minRows !== null) {
            minHeight = singleRowHeight * minRows;
            if (boxSizing === 'border-box') {
                minHeight = minHeight + paddingSize + borderSize;
            }
            height = Math.max(minHeight, height);
        }
        if (maxRows !== null) {
            maxHeight = singleRowHeight * maxRows;
            if (boxSizing === 'border-box') {
                maxHeight = maxHeight + paddingSize + borderSize;
            }
            overflowY = height > maxHeight ? '' : 'hidden';
            height = Math.min(maxHeight, height);
        }
    }
    // Remove scroll bar flash when autosize without maxRows
    if (!maxRows) {
        overflowY = 'hidden';
    }
    return { height: height, minHeight: minHeight, maxHeight: maxHeight, overflowY: overflowY };
}
//# sourceMappingURL=calculate-node-height.js.map