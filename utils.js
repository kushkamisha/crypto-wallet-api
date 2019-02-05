'use strict'

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
