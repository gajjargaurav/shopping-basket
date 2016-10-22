const expect = require('expect')
const stubs = require('./stubs')
const receipt = require('../receipt')
const catalogue = require('../catalogue')

const simpleBasketResult = receipt(stubs.simple.basket, catalogue)
expect(simpleBasketResult).toEqual(stubs.simple.receipt)
