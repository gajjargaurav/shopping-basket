const expect = require('expect')
const stubs = require('./stubs')
const receipt = require('../receipt')
const catalogue = require('../catalogue')

const simpleBasketResult = receipt(stubs.simple.basket, catalogue)
expect(simpleBasketResult).toEqual(stubs.simple.receipt)

// discount tests
const discount = require('../discount')
expect(discount(3, 50))
.toEqual({ price: 100, message: 'three for the price of two'})
