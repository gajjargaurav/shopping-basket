const expect = require('expect.js')
const stubs = require('./stubs')
const order = require('../order')
const catalogue = require('../catalogue')

context('order', function () {
	describe('simple', function () {
		it('gets the simple order', function () {
			const expected = stubs.simple.order
			const actual = order(stubs.simple.basket, catalogue)
			expect(actual).to.eql(expected)
		})
	})
})
