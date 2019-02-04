'use strict'

const express = require('express')
const rpn = require('request-promise-native')

const router = express.Router()

router.post('/', (req, res) => {
    const currency = req.query.currency.toUpperCase()
    const baseUrl = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/'
    const url = `${baseUrl}${currency}USD`

    rpn(url)
        .then(data => {
            const price = JSON.parse(data).last
            res.send({
                status: 'success',
                message: `${price}`
            })
        }, err => {
            res.send({
                status: 'error', 
                message: '<none>'
            })
        })
})

module.exports = router
