const expect = require('expect')
const stubs = require('./stubs')
const receipt = require('../receipt')
const catalogue = require('../catalogue')

const result = receipt(stubs.simple.basket, catalogue)

expect(result).toEqual(stubs.simple.receipt)
