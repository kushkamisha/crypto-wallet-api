'use strict'

/**
 * Bitcoin crypto module
 * @module lib/bitcoin.js
 * @see https://en.bitcoin.it/wiki/Wallet_import_format
 */

const crypto = require('crypto')
const bs58 = require('bs58')

/**
 * Generate Bitcoin private key from pseudorandom number
 * @todo Make private key more random
 * @returns {Buffer} Bitcoin private key
 */
const generatePrKey = () => {
    const DH = crypto.createDiffieHellman(256)
    DH.generateKeys()
    const prKey = DH.getPrivateKey()

    return prKey
}

/**
 * Converts private key from binary to the WIF format
 * @param {Buffer} prkey - Private key
 * @returns {string} Private key in the WIF format
 */
const prKeyToWIF = prkey => {
    const prKeyBuffer = Buffer.from(prKey, 'hex')

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

module.exports = {
    generatePrKey,
    prKeyToWIF,
}
