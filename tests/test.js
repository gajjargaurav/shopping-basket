const expect = require('expect')
const stubs = require('./stubs')
const order = require('../order')
const catalogue = require('../catalogue')

const simpleBasketResult = order(stubs.simple.basket, catalogue)
expect(simpleBasketResult).toEqual(stubs.simple.order)

// discount tests
const discount = require('../discount')

const simpleDiscount = discount(3, 50)
expect(simpleDiscount)
.toEqual({
	cost: 100,
	discount: {
		type: 'absolute',
		value: 'three for the price of two'
	}
})

const noDiscount = discount(2, 50)
expect(noDiscount)
.toEqual({ cost: 100})

const mixedDiscount = discount(4, 50)
expect(mixedDiscount)
.toEqual({
	cost: 150,
	discount: {
		type: 'absolute',
		value: 'three for the price of two'
	}
})
