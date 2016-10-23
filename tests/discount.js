const expect = require('expect')
const discount = require('../discount')

context('Discount', function () {
	describe('when discount is applicable', function () {
		it('simple discount', function () {
			const expected = {
				cost: 100,
				discount: {
					type: 'message',
					value: 'three for the price of two'
				}
			}
			const actual = discount(3, 50)
			expect(actual).toIncludeKey('discount')
			expect(actual).toEqual(expected)
		})

		it('mixed discount', function () {
			const expected = {
				cost: 150,
				discount: {
					type: 'message',
					value: 'three for the price of two'
				}
			}
			const actual = discount(4, 50)
			expect(actual).toEqual(expected)
		})
	})

	describe('when discount is not applicable', function () {
		it('description', function () {
			const expected = { cost: 100}
			const actual = discount(2, 50)
			expect(actual).toEqual(expected)
		})
	})
})
