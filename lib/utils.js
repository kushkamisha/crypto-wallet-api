'use strict'

/**
 * Utils module
 * @module lib/utils
 */

/**
 * Check is provided string is one from the valid parameters and if not -
 * provide default value
 * @param {string} str - Parameter to check
 * @returns {string} Valid parameter from the list
 */
const prettifyCurrencyString = str => {
    const _default = 'BTC'

    if (typeof str !== 'string' && !(str instanceof String))
        return _defautl

    const currencies = ['BTC', 'ETH']

    if (currencies.includes(str.toUpperCase()))
        return str.toUpperCase()
    else
        return _default
}

module.exports = {
    prettifyCurrencyString,
}
