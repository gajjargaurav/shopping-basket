const stub = {
	simple: {
		basket:['apples', 'apples', 'oranges', 'papayas', 'apples' ],
		receipt: {
			items: [
				{ name: 'apples', price: 75 },
				{ name: 'oranges', price: 30 },
				{ name: 'papayas', price: 50, message: 'three for the price of two' }
			],
			total: 155
		}
	}
}

module.exports = stub
