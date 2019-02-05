'use strict'

const express = require('express')
const rpn = require('request-promise-native')

const { prettifyCurrencyString } = require('./utils')

const router = express.Router()

router.post('/price', (req, res) => {
    const currency = prettifyCurrencyString(req.query.currency)

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

module.exports = router
