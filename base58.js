'use strict'

// const buf = Buffer.from('1234', 'hex')
// console.log(buf.writeUInt32())

const SYMBOLS = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'

// function base58(num) {
//     return num.split('').reverse().reduce(function (acc, cur, index) {
//         return (cur === '1') ? acc + Math.pow(2, index) : acc
//     }, 0)
// }

// console.log(base58('110'))

const num = 685726

const base58 = num => {
    let result = ''
    while (num > 0) {
        result = SYMBOLS[num % 58] + result
        num = Math.floor(num / 58)
    }

    return result
}

console.log(base58(num))

const Base58 = require('base58');
console.log(Base58.int_to_base58(685726))