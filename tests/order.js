const expect = require('expect')
const stubs = require('./stubs')
const order = require('../order')
const catalogue = require('../catalogue')

context('order', function () {
	describe('simple', function () {
		it('gets the simple order', function () {
			const expected = stubs.simple.order
			const actual = order(stubs.simple.basket, catalogue)
			expect(actual).toEqual(expected)
		})
	})
	describe('invalid', function () {
		it('throws when basket has invlaid items', function () {
			expect(function () { order(['banana'], catalogue) }).toThrow('Product Not found in Catalogue')
		})
		it('throws when basket is empty', function () {
			expect(function () { order([], catalogue)}).toThrow('Basket is empty')
		})
	})
})
