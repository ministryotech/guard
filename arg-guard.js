// noinspection JSUnusedGlobalSymbols

/*
    Argument Guard
    --------------
    Throws well formatted errors for guarding methods.
    https://github.com/ministryotech/guard
*/
(function() {

    const root = window

    /**
     * A helper for guarding against null / undefined arguments.
     */
    const ArgumentGuard = {

        /**
         * Throws if the required parameter is null or undefined.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIf: function(param, paramName) {
            if (param === undefined || param === null) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is required.'
                : 'The parameter is required.')
        },
    
        /**
         * Throws if the required parameter is not in the range of expected values.
         * @param {any} param The parameter to guard.
         * @param {Array<any>} validValues The parameter values that are acceptable.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNotIn: function(param, validValues, paramName) {
            ArgumentGuard.throwIf(validValues, 'validValues')
            ArgumentGuard.throwIf(param, paramName)
            if (!validValues.includes(param)) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is out of range.'
                : 'The parameter is out of range.')
        },
        
        /**
         * Throws if the required parameter is null.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNull: function(param, paramName) {
            if (param === null) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter cannot be null.'
                : 'The parameter cannot be null.')
        },
        
        /**
         * Throws if the required parameter is undefined.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfUndefined: function(param, paramName) {
            if (param === undefined) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter must be defined.'
                : 'The parameter must be defined.')
        },
        
        /**
         * Throws if the specified parameter is not a number.
         * @param {any} param The parameter to guard.
         * @param {?string} paramName The optional name of the parameter.
         * @throws {TypeError}
         */
        throwIfNaN: function(param, paramName) {
            if (isNaN(Number(param))) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is not a number.'
                : 'The parameter is not a number.')
        }
    }

    /*--------------------------------------------------------------------------*/

    // Export library
    // noinspection JSUnresolvedReference - define check for require.js module support.
    if (typeof define === 'function' && define.amd) {
        // noinspection JSUnresolvedReference - define check for require.js module support.
        define('arg-guard', [], function() { return ArgumentGuard })
    } else if (typeof exports === 'object') {
        module.exports = ArgumentGuard
    } else {
        root.ArgumentGuard = ArgumentGuard
    }
    
})()