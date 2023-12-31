// noinspection JSUnusedGlobalSymbols

/*
    Argument Guard
    --------------
    Throws well formatted errors for guarding methods.
    https://github.com/ministryotech/guard
*/
(function() {

    var root = window

    /**
     * A helper for guarding against null / undefined arguments.
     */
    var argumentGuard = {

        /**
         * Throws if the required parameter is null or undefined.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIf: function(param, paramName) {
            if (param === undefined || param === null) {
                throw new TypeError(paramName
                    ? 'The ' + paramName + ' parameter is required.'
                    : 'The parameter is required.')
            }
        },

        /**
         * Throws if the required parameter is not in the range of expected values.
         * @param {any} param The parameter to guard.
         * @param {Array<any>} validValues The parameter values that are acceptable.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNotIn: function(param, validValues, paramName) {
            argumentGuard.throwIf(validValues, 'validValues')
            argumentGuard.throwIf(param, paramName)
            if (!validValues.includes(param)) {
                throw new TypeError(paramName
                    ? 'The ' + paramName + ' parameter is out of range.'
                    : 'The parameter is out of range.')
            }
        },

        /**
         * Throws if the required parameter is null.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNull: function(param, paramName) {
            if (param === null) {
                throw new TypeError(paramName
                    ? 'The ' + paramName + ' parameter cannot be null.'
                    : 'The parameter cannot be null.')
            }
        },

        /**
         * Throws if the required parameter is undefined.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfUndefined: function(param, paramName) {
            if (param === undefined) {
                throw new TypeError(paramName
                    ? 'The ' + paramName + ' parameter must be defined.'
                    : 'The parameter must be defined.')
            }
        },

        /**
         * Throws if the specified parameter is not a number.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNaN: function(param, paramName) {
            if (isNaN(Number(param))) {
                throw new TypeError(paramName
                    ? 'The ' + paramName + ' parameter is not a number.'
                    : 'The parameter is not a number.')
            }
        },
    }

    /*--------------------------------------------------------------------------*/

    // Export library
    // noinspection JSUnresolvedReference - define check for require.js module support.
    if (typeof define === 'function' && define.amd) {
        // noinspection JSUnresolvedReference - define check for require.js module support.
        define('arg-guard', [], function() {
            return argumentGuard
        })
    } else { // noinspection JSUnresolvedReference
        if (typeof exports === 'object') {
            // noinspection JSUnresolvedReference
            module.exports = argumentGuard
        } else {
            root.ArgumentGuard = argumentGuard
        }
    }

})()
