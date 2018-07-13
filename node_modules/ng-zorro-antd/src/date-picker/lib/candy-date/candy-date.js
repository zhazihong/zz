/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as addMonths from 'date-fns/add_months';
import * as addYears from 'date-fns/add_years';
import * as endOfMonth from 'date-fns/end_of_month';
import * as setDay from 'date-fns/set_day';
import { firstDayOfWeek } from './util';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        var /** @type {?} */ date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // return new CandyDate(setYear(this.date, year));
        var /** @type {?} */ date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        var /** @type {?} */ date = new Date(this.nativeDate);
        date.setMonth(month);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        var /** @type {?} */ date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.endOf = /**
     * @param {?} grain
     * @return {?}
     */
    function (grain) {
        switch (grain) {
            case 'month': return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            var /** @type {?} */ left = this.toNativeDate();
            var /** @type {?} */ right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth();
                case 'day':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate();
                case 'hour':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours();
                case 'minute':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes();
                case 'second':
                    return left.getFullYear() === right.getFullYear()
                        && left.getMonth() === right.getMonth()
                        && left.getDate() === right.getDate()
                        && left.getHours() === right.getHours()
                        && left.getMinutes() === right.getMinutes()
                        && left.getSeconds() === right.getSeconds();
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isAfter = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            var /** @type {?} */ left = this.toNativeDate();
            var /** @type {?} */ right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth());
                case 'day':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate());
                case 'hour':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours());
                case 'minute':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes());
                case 'second':
                    return (left.getFullYear() > right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() > right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() > right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() > right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() > right.getSeconds());
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isBefore = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            var /** @type {?} */ left = this.toNativeDate();
            var /** @type {?} */ right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth());
                case 'day':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate());
                case 'hour':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours());
                case 'minute':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes());
                case 'second':
                    return (left.getFullYear() < right.getFullYear())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() < right.getDate())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() < right.getHours())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() < right.getMinutes())
                        || (left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth() && left.getDate() === right.getDate() && left.getHours() === right.getHours() && left.getMinutes() === right.getMinutes() && left.getSeconds() < right.getSeconds());
            }
        }
        return false;
    };
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = /**
     * @return {?}
     */
    function () {
        return this.isSame(new Date(), 'day');
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isInvalid = /**
     * @return {?}
     */
    function () {
        return isNaN(this.nativeDate.valueOf());
    };
    /**
     * 0-6 (Sunday to Saturday)
     */
    /**
     * 0-6 (Sunday to Saturday)
     * @param {?=} locale
     * @return {?}
     */
    CandyDate.prototype.firstDayOfWeek = /**
     * 0-6 (Sunday to Saturday)
     * @param {?=} locale
     * @return {?}
     */
    function (locale) {
        return firstDayOfWeek(locale);
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (date === void 0) { date = this; }
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
function CandyDate_tsickle_Closure_declarations() {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=candy-date.js.map