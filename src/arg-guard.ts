// noinspection JSUnusedGlobalSymbols

/*
    Argument Guard
    --------------
    Throws well formatted errors for guarding methods.
    https://github.com/ministryotech/guard
*/

/**
 * A helper for guarding against null / undefined arguments.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
const ArgumentGuard = {

    /**
     * Throws if the required parameter is null or undefined.
     * @param param The parameter to guard.
     * @param paramName The optional name of the parameter.
     * @throws {TypeError}
     */
    throwIf(param : unknown, paramName: string | null) {
        if (param === undefined || param === null) {
            throw new TypeError(paramName
                ? `The ${ paramName } parameter is required.`
                : 'The parameter is required.')
        }
    },

    /**
     * Throws if the required parameter is not in the range of expected values.
     * @param param The parameter to guard.
     * @param validValues The parameter values that are acceptable.
     * @param paramName The optional name of the parameter.
     * @throws {TypeError}
     */
    throwIfNotIn(param: unknown, validValues: Array<unknown>, paramName: string | null) {
        ArgumentGuard.throwIf(validValues, 'validValues')
        ArgumentGuard.throwIf(param, paramName)
        if (!validValues.includes(param)) {
            throw new TypeError(paramName
                ? `The ${ paramName } parameter is out of range.`
                : 'The parameter is out of range.')
        }
    },

    /**
     * Throws if the required parameter is null.
     * @param param The parameter to guard.
     * @param paramName The optional name of the parameter.
     * @throws {TypeError}
     */
    throwIfNull(param: unknown, paramName: string | null) {
        if (param === null) {
            throw new TypeError(paramName
                ? `The ${ paramName } parameter cannot be null.`
                : 'The parameter cannot be null.')
        }
    },

    /**
     * Throws if the required parameter is undefined.
     * @param param The parameter to guard.
     * @param paramName The optional name of the parameter.
     * @throws {TypeError}
     */
    throwIfUndefined(param: unknown, paramName: string | null) {
        if (param === undefined) {
            throw new TypeError(paramName
                ? `The ${ paramName } parameter must be defined.`
                : 'The parameter must be defined.')
        }
    },

    /**
     * Throws if the specified parameter is not a number.
     * @param param The parameter to guard.
     * @param paramName The optional name of the parameter.
     * @throws {TypeError}
     */
    throwIfNaN(param: unknown, paramName: string | null) {
        if (isNaN(Number(param))) {
            throw new TypeError(paramName
                ? `The ${ paramName } parameter is not a number.`
                : 'The parameter is not a number.')
        }
    },
}

export default ArgumentGuard
