'use strict'

const bitcoin = require('./lib/bitcoin')

const prKey = '60650407ca00eb762bd01233630df3ab4d73625d459d2fbf2c5b6d8b49460f45'
const prKeyBuffer = Buffer.from(prKey, 'hex')
console.log(bitcoin.prKeyToWIF(prKeyBuffer))
