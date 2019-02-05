'use strict'

// https://en.bitcoin.it/wiki/Wallet_import_format

const crypto = require('crypto')
const bs58 = require('bs58')

// const DH = crypto.createDiffieHellman(256)
// const privateKey = DH.generateKeys() // buffer type

// console.log(privateKey)
// console.log('KxFC1jmwwCoACiCAWZ3eXa96mBM6tb3TYzGmf6YwgdGWZgawvrtJ')
// console.log(privateKey.length)

/**
 * Converts private key from binary to the WIF format
 * @param {Buffer} prkey - Private key
 * @returns {string} Private key in the WIF format
 */
const prKeyToWIF = prkey => {
    // Add 0x80 byte to denote mainnet address
    const prefix = Buffer.from('80', 'hex')
    prkey = Buffer.concat([prefix, prkey])

    // Perform sha256 hashing two times
    const hash1 = crypto.createHash('sha256').update(prkey).digest()
    const hash2 = crypto.createHash('sha256').update(hash1).digest()

    // Get first 4 bytes to create checksum
    const checksum = hash2.slice(0, 4)

    // Add checksum to the end of private key with prefix
    prkey = Buffer.concat([prkey, checksum])

    // Convert private key to base58 format
    return bs58.encode(prkey)
}

const prkey = 'd44e833ca5b5e0ce40ebe72f586fbc71a357c3bb35403277242570e1c73f13f3'
// const prkey = '0C28FCA386C7A227600B2FE50B7CAE11EC86D3BF1FBE471BE89827E19D72AA1D'
const prkeyBuf = Buffer.from(prkey, 'hex')
console.log(prKeyToWIF(prkeyBuf))
