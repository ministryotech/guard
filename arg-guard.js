/*
    Argument Guard
    --------------
    Throws well formatted errors for guarding methods.

    https://github.com/ministryotech/guard
*/
(function() {

    const root = window

    const argumentGuard = {

        /**
         * Throws a {TypeError} if the required parameter is null or undefined.
         * 
         * @param {any} param The parameter to guard.
         * @param {string} paramName The optional name of the parameter.
         */
        throwIf: function(param, paramName) {
            if (param === undefined || param === null) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is required.'
                : 'The parameter is required.')
        },
    
        /**
         * Throws a {TypeError} if the required parameter is not in the range of expected values.
         * 
         * @param {any} param The parameter to guard.
         * @param {string} paramName The optional name of the parameter.
         */
        throwIfNotIn: function(param, validValues, paramName) {
            argumentGuard.throwIf(validValues, 'validValues')      
            argumentGuard.throwIf(param, paramName) 
            if (!validValues.includes(param)) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is out of range.'
                : 'The parameter is out of range.')
        },
        
        /**
         * Throws a {TypeError} if the required parameter is null.
         * 
         * @param {any} param The parameter to guard.
         * @param {string} paramName The optional name of the parameter.
         */
        throwIfNull: function(param, paramName) {
            if (param === null) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter cannot be null.'
                : 'The parameter cannot be null.')
        },
        
        /**
         * Throws a {TypeError} if the required parameter is undefined.
         * 
         * @param {any} param The parameter to guard.
         * @param {string} paramName The optional name of the parameter.
         */
        throwIfUndefined: function(param, paramName) {
            if (param === undefined) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter must be defined.'
                : 'The parameter must be defined.')
        },
        
        /**
         * Throws a {TypeError} if the specified parameter is not a number.
         * 
         * @param {any} param The parameter to guard.
         * @param {string} paramName The optional name of the parameter.
         */
        throwIfNaN: function(param, paramName) {
            if (isNaN(Number(param))) throw TypeError(paramName 
                ? 'The ' + paramName + ' parameter is not a number.'
                : 'The parameter is not a number.')
        }
    }

    // Exports to the global scope
    if (typeof define === 'function' && define.amd) {
        define('arg-guard', [], function() { return argumentGuard })
    } else if (typeof exports === 'object') {
        module.exports = argumentGuard
    } else {
        root.ArgumentGuard = argumentGuard
    }
    
})()