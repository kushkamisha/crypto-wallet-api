'use strict'

const express = require('express')
const rpn = require('request-promise-native')

const utils = require('./lib/utils')
const bitcoin = require('./lib/bitcoin')

const router = express.Router()

router.post('/price', (req, res) => {
    const currency = utils.prettifyCurrencyString(req.query.currency)

    const baseUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/'
    const url = `${baseUrl}${currency}USD`

    rpn(url)
        .then(data => {
            const price = JSON.parse(data).last
            res.send({
                status: 'success',
                currency,
                price: `${price}`
            })
        }, err => {
            res.send({
                status: 'error', 
                message: '<none>'
            })
        })
})

router.post('/generatePrKey', (req, res) => {
    const privateKeyBuffer = bitcoin.generatePrKey()
    const privateKey = privateKeyBuffer.toString('hex')

    res.send({
        status: 'success',
        privateKey
    })
})

router.post('/toWIF', (req, res) => {
    // todo
})

module.exports = router
